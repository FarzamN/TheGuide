import {Alert} from 'react-native';
import {useState, useEffect} from 'react';
import {android, iOS} from '../utils/Constants';
import Geolocation from 'react-native-geolocation-service';
import {PERMISSIONS, request, check, RESULTS} from 'react-native-permissions';

const useGeolocation = () => {
  const [location, setLocation] = useState({latitude: null, longitude: null});
  const [error, setError] = useState(null);

  const requestLocationPermission = async () => {
    try {
      let permission;

      if (android) {
        permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
      } else if (iOS) {
        permission = PERMISSIONS.IOS.LOCATION_ALWAYS;
      }

      const result = await check(permission);

      if (result === RESULTS.GRANTED) {
        return true;
      } else if (result === RESULTS.DENIED) {
        const requestResult = await request(permission);
        return requestResult === RESULTS.GRANTED;
      } else {
        Alert.alert(
          'Permission Denied',
          'Location access is required to use this feature.',
        );
        return false;
      }
    } catch (err) {
      setError('Error requesting location permissions.');
      console.error(err);
      return false;
    }
  };

  const getCurrentLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) return;

    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
      },
      error => {
        setError(error.message);
        Alert.alert('Error', error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return {location, getCurrentLocation, error};
};

export default useGeolocation;

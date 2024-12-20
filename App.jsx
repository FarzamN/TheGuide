import React, {useEffect} from 'react';
import {Color} from './src/utils/Color';
import Splash from 'react-native-splash-screen';
import {requestStoragePermission} from './src/hooks';
import {useDispatch, useSelector} from 'react-redux';
import {USER_DETAILS} from './src/redux/reducer/Holder.js';
import AuthNavigation from './src/navigation/AuthNavigation';
import navigationColor from 'react-native-system-navigation-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigation from './src/navigation/DrawerNavigation.jsx';
import {getCity, getCoutry, getState} from './src/redux/actions/AuthAction';

const App = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails);

  // hell
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const time = getTime();
    if (!time) AsyncStorage.setItem('time', '20:00');
  }, []);

  const getTime = async () => {
    const time = await AsyncStorage.getItem('time');
    return time;
  };

  const fetchData = async () => {
    try {
      await Promise.all([
        dispatch(getCoutry()),
        dispatch(getCity()),
        dispatch(getState()),
      ]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const getUserDetails = async () => {
    const userData = await AsyncStorage.getItem('user_details');
    dispatch({type: USER_DETAILS, payload: JSON.parse(userData)});
  };

  setTimeout(() => {
    Splash.hide();
  }, 5000);

  useEffect(() => {
    getUserDetails();
    requestStoragePermission();
    navigationColor.setNavigationColor(Color.white);
  }, []);
  return <>{userDetails ? <DrawerNavigation /> : <AuthNavigation />}</>;
};

export default App;

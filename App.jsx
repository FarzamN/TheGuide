import React, {useEffect} from 'react';
import Splash from 'react-native-splash-screen';
import AuthNavigation from './src/navigation/AuthNavigation';
// import UserNavigation from './src/navigation/UserNavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {getCity, getCoutry, getState} from './src/redux/actions/AuthAction';
import navigationColor from 'react-native-system-navigation-bar';
import {Color} from './src/utils/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_DETAILS} from './src/redux/reducer/Holder.js';

const App = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails);

  useEffect(() => {
    Promise.all([
      dispatch(getCoutry()),
      dispatch(getCity()),
      dispatch(getState()),
    ]);
  }, []);

  const getUserDetails = async () => {
    const userData = await AsyncStorage.getItem('user_details');
    dispatch({type: USER_DETAILS, payload: JSON.parse(userData)});
  };

  setTimeout(() => {
    Splash.hide();
  }, 3000);

  useEffect(() => {
    getUserDetails();
    navigationColor.setNavigationColor(Color.white);
  }, []);
  return <>{userDetails ? <DrawerNavigation /> : <AuthNavigation />}</>;
};

export default App;

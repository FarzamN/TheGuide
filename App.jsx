import React from 'react';
import Splash from 'react-native-splash-screen';
import AuthNavigation from './src/navigation/AuthNavigation';
import UserNavigation from './src/navigation/UserNavigation';
import {useSelector} from 'react-redux';
const App = () => {
  const userDetails = useSelector(state => state.userDetails);


  setTimeout(() => {
    Splash.hide();
  }, 3000);


  return <>{
    // userDetails ? 
    <UserNavigation /> 
    // : 
    // <AuthNavigation />
    }</>;
};

export default App;

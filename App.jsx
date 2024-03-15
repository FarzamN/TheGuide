import React from 'react';
import Splash from 'react-native-splash-screen';
import AuthNavigation from './src/navigation/AuthNavigation';
const App = () => {
  setTimeout(() => {
    Splash.hide();
  }, 3000);
  return <AuthNavigation />;
};

export default App;

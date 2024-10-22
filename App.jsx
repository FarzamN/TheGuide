import React, {useEffect} from 'react';
import Splash from 'react-native-splash-screen';
import AuthNavigation from './src/navigation/AuthNavigation';
import UserNavigation from './src/navigation/UserNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {getCity, getCoutry, getState} from './src/redux/actions/AuthAction';

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

  setTimeout(() => {
    Splash.hide();
  }, 3000);

  return <>{userDetails ? <UserNavigation /> : <AuthNavigation />}</>;
};

export default App;

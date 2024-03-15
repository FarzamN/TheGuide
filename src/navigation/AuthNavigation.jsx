import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNav} from '../utils/Data';

const AuthNavigation = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={AuthNav[0].n}
        screenOptions={{headerShown: false, animation: 'ios'}}>
        {AuthNav.map(({n, c}) => (
          <Screen name={n} component={c} key={n} />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;

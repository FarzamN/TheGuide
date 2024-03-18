import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserNav} from '../utils/Data';

const UserNavigation = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={UserNav[0].n}
        screenOptions={{headerShown: false, animation: 'ios'}}>
        {UserNav.map(({n, c}) => (
          <Screen name={n} component={c} key={n} />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};

export default UserNavigation;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  City,
  Country,
  Login,
  Register,
  State,
  Term,
} from '../screen/authentication';

const AuthNavigation = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  const AuthNav = [
    {n: 'login', c: Login},
    {n: 'register', c: Register},
    {n: 'country', c: Country},
    {n: 'city', c: City},
    {n: 'state', c: State},
    {n: 'term', c: Term},
  ];
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

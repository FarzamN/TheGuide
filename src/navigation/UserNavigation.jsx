import React from 'react';
import {style} from './style';
import {Color} from '../utils/Color';
import {City, Country, State} from '../screen/authentication';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Home,
  Game,
  Profile,
  WebView,
  EditProfile,
  EventScreen,
  StatusScreen,
  PrayerScreen,
} from '../screen/user';
import {FullImage} from '../components';

const Tab = createBottomTabNavigator();

const createNavigator = config => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{headerShown: false, animation: 'ios'}}
      initialRouteName={config.initialRouteName}>
      {config.screens.map(({name, component}) => (
        <Screen key={name} name={name} component={component} />
      ))}
    </Navigator>
  );
};

const allHomeConfig = {
  initialRouteName: 'home',
  screens: [
    {name: 'home', component: Home},
    {name: 'profile', component: Profile},
    {name: 'editProfile', component: EditProfile},
    {name: 'country', component: Country},
    {name: 'city', component: City},
    {name: 'state', component: State},
    {name: 'game', component: Game},
  ],
};

const allStatusConfig = {
  initialRouteName: 'status',
  screens: [{name: 'status', component: StatusScreen}],
};
const allPrayerConfig = {
  initialRouteName: 'prayer',
  screens: [
    {name: 'prayer', component: PrayerScreen},
    {name: 'webview', component: WebView},
  ],
};
const allEventConfig = {
  initialRouteName: 'event',
  screens: [
    {name: 'event', component: EventScreen},
    {name: 'webview', component: WebView},
  ],
};

export const AllHome = () => createNavigator(allHomeConfig);
export const AllPrayer = () => createNavigator(allPrayerConfig);
export const AllStatus = () => createNavigator(allStatusConfig);
export const AllEvent = () => createNavigator(allEventConfig);

const UserNavigation = () => {
  const UserNav = [
    {c: AllHome, icon: require('../assets/image/nav/bible.png'), n: 'Bible'},
    {c: AllPrayer, icon: require('../assets/image/nav/pray.png'), n: 'Prayer'},
    // {
    //   c: AllStatus,
    //   icon: require('../assets/image/nav/status.png'),
    //   n: 'Status',
    // },
    {c: AllEvent, icon: require('../assets/image/nav/event.png'), n: 'Event'},
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Color.orange,
        tabBarLabelStyle: style.tabBarLabel,
        tabBarInactiveTintColor: '#A7A7C3',
        tabBarLabelPosition: 'below-icon',
      }}
      initialRouteName={UserNav[0].name}>
      {UserNav.map(({n, c, icon}) => (
        <Tab.Screen
          key={n}
          name={n}
          component={c}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <FullImage
                  source={icon}
                  style={style.icon}
                  color={focused ? Color.orange : '#A7A7C3'}
                />
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default UserNavigation;

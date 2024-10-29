import {style} from './style';
import React from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {City, Country, State} from '../screen/authentication';
import {Color} from '../utils/Color';

import {Home, EditProfile, Profile, Game, StatusScreen} from '../screen/user';

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

export const AllHome = () => createNavigator(allHomeConfig);
export const AllStatus = () => createNavigator(allStatusConfig);

const UserNavigation = () => {
  const UserNav = [
    {c: AllHome, icon: require('../assets/image/nav/bible.png'), n: 'Home'},
    // {c: AllExplore, icon: require('../assets/image/nav/pray.png'), n: 'Explore'},
    {
      c: AllStatus,
      icon: require('../assets/image/nav/status.png'),
      n: 'Status',
    },
    // {c: AllMusic, icon: require('../assets/image/nav/event.png'), n: 'Music'},
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Color.orange,
        tabBarLabelStyle: style.Text,
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
            tabBarStyle: {display: n === 'game' ? 'none' : 'flex'},
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    style={style.icon}
                    source={icon}
                    tintColor={focused ? Color.orange : '#A7A7C3'}
                  />
                </View>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default UserNavigation;

// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {UserNav} from '../utils/Data';

// const UserNavigation = () => {
//   const {Navigator, Screen} = createNativeStackNavigator();
//   return (
//     <Navigator
//       initialRouteName={UserNav[0].n}
//       screenOptions={{headerShown: false, animation: 'ios'}}>
//       {[
//   {n: 'home', c: Home},
//   {n: 'bibletest', c: BibleTest},
//   {n: 'topicvideoquiz', c: TopicVideoQuiz},
//   ,
// ].map(({n, c}) => (
//         <Screen name={n} component={c} key={n} />
//       ))}
//     </Navigator>
//   );
// };

// export default UserNavigation;

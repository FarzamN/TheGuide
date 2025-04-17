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
  DailyReview,
  EventScreen,
  StatusScreen,
  PrayerScreen,
  Calendar,
} from '../screen/user';
import {FullImage} from '../components';
import ChatScreen from '../screen/user/Chat/chatScreen';
import Inbox from '../screen/user/Chat/inbox';

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
    {name: 'dailyReview', component: DailyReview},
  ],
};

// const allNoteConfig = {
//   initialRouteName: 'note',
//   screens: [{name: 'note', component: ShowNote}],
// };

const allStatusConfig = {
  initialRouteName: 'status',
  screens: [{name: 'status', component: StatusScreen}],
};

const allChatConfig = {
  initialRouteName: 'inbox',
  screens: [
    {name: 'inbox', component: Inbox},
    {name: 'chatScreen', component: ChatScreen},
  ],
};

const allPrayerConfig = {
  initialRouteName: 'prayer',
  screens: [
    {name: 'prayer', component: PrayerScreen},
    {name: 'calendar', component: Calendar},
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
// export const AllNote = () => createNavigator(allNoteConfig);
export const AllPrayer = () => createNavigator(allPrayerConfig);
export const AllChat = () => createNavigator(allChatConfig);
export const AllStatus = () => createNavigator(allStatusConfig);
export const AllEvent = () => createNavigator(allEventConfig);

const UserNavigation = () => {
  const UserNav = [
    {c: AllHome, icon: require('../assets/image/nav/bible.png'), n: 'Bible'},
    // {c: AllNote, icon: require('../assets/image/nav/note.png'), n: 'Note'},
    {c: AllPrayer, icon: require('../assets/image/nav/pray.png'), n: 'Prayer'},
    {
      c: AllChat,
      icon: require('../assets/image/nav/messege.png'),
      n: 'Messages',
    },
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

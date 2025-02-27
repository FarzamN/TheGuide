import React from 'react';
import {Color} from '../utils/Color';
import {FullImage} from '../components';
import UserNavigation from './UserNavigation';
import DrawerContainer from './DrawerContainer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {tab} from '../utils/Constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatScreen, Inbox} from '../screen/user';
// import AllRead from './AllRead'; // Replace these with actual components
// import AllTournament from './AllTournament'; // Replace these with actual components
// import AllGuideUS from './AllGuideUS'; // Replace these with actual components
// import AllPray from './AllPray'; // Replace these with actual components

const DrawerNavigation = () => {
  const {Navigator, Screen} = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: Color.orange,
        }}
        initialRouteName="Bible School"
        drawerContent={props => <DrawerContainer {...props} />}>
        {[
          {
            n: 'Bible School',
            c: UserNavigation,
            img: require('../assets/image/nav/bible.png'),
          },
          {
            n: 'Message',
            c: AllMessages,
            img: require('../assets/image/nav/bible.png'),
          },
        ].map(i => (
          <Screen
            key={i.n}
            name={i.n}
            component={i.c}
            options={{
              drawerIcon: ({focused}) => (
                <FullImage
                  color={focused ? Color.orange : '#787878'}
                  source={i.img}
                  style={{width: tab ? 30 : 20, height: tab ? 30 : 20}}
                />
              ),
            }}
          />
        ))}
        {/* <Screen name="Read Bible" component={UserNavigation} />
        <Screen name="Tournament" component={UserNavigation} />
        <Screen name="The Guide.us" component={UserNavigation} />
        <Screen name="Prayer" component={UserNavigation} /> */}
        {/* <Screen name="Message" component={AllMessages} />
        <Screen name="Read Bible" component={AllRead} />
        <Screen name="Tournament" component={AllTournament} />
        <Screen name="The Guide.us" component={AllGuideUS} />
        <Screen name="Prayer" component={AllPray} /> */}
      </Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

export const AllMessages = () => {
  const {Navigator, Screen} = createDrawerNavigator();
  return (
    <Navigator
      initialRouteName={'inbox'}
      screenOptions={{headerShown: false, animation: 'ios'}}>
      <Screen name={'inbox'} component={Inbox} />
      <Screen name={'chatScreen'} component={ChatScreen} />
    </Navigator>
  );
};

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContainer from './DrawerContainer';
import UserNavigation from './UserNavigation';
// import AllMessages from './AllMessages'; // Replace these with actual components
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
          drawerStyle: {
            width: '100%', // This makes the drawer take up the full width of the screen
            backgroundColor: '#2C76F1', // Optional: Set the drawer background color
          },
        }}
        initialRouteName="Bible School"
        drawerContent={props => <DrawerContainer {...props} />}>
        <Screen name="Bible School" component={UserNavigation} />
        <Screen name="Message" component={UserNavigation} />
        <Screen name="Read Bible" component={UserNavigation} />
        <Screen name="Tournament" component={UserNavigation} />
        <Screen name="The Guide.us" component={UserNavigation} />
        <Screen name="Prayer" component={UserNavigation} />
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

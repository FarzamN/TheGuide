/**
 * @format
 */
import App from './App';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import store from './src/redux/reducer/store';
import {MenuProvider} from 'react-native-popup-menu';
import {Provider as StoreProvider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function Root() {
  return (
    <StoreProvider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <MenuProvider>
          <App />
        </MenuProvider>
      </GestureHandlerRootView>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Root);

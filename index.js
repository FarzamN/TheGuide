/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/reducer/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function Root() {
  return (
    <PaperProvider>
      <StoreProvider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <App />
        </GestureHandlerRootView>
      </StoreProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Root);

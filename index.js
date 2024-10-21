/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/reducer/store';

export default function Root() {
  return (
    <PaperProvider>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Root);

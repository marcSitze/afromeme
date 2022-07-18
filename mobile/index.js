/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import Toast from 'react-native-toast-notifications';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './src/redux/setup/store';

const MyApp = () => (
  <>
  <Provider store={store}>
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  </Provider>
  <Toast ref={(ref) => global['toast'] = ref} />
  </>
)

AppRegistry.registerComponent(appName, () => MyApp);

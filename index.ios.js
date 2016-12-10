// IOS :)
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './src/components/App/App';
import configureStore from './src/store/configureStore';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// Render to the device
AppRegistry.registerComponent('Mythology', () => Root);

// IOS :)
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './src/components/App/App';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Enable Chrome Network debugging
// const _XHR = GLOBAL.originalXMLHttpRequest ?
//   GLOBAL.originalXMLHttpRequest :
//   GLOBAL.XMLHttpRequest;
// XMLHttpRequest = _XHR;

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// Render to the device
AppRegistry.registerComponent('Mythology', () => Root);

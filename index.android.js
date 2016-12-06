// IOS :)
import React from 'react';
import { AppRegistry } from 'react-native';

import App from './src/components/App/App';

const Root = () => (
  <App />
);

// Render to the device
AppRegistry.registerComponent('Mythology', () => Root);
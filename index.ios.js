// IOS :)
import React from 'react';
import { View, AppRegistry } from 'react-native';

import Background from './src/components/Background/Background';
import Header from './src/components/Header/Header';
import HeroesList from './src/components/HeroesList/HeroesList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Background>
      <Header title={'Pantheon'} />
      <HeroesList />
    </Background>
  </View>
);

// Render to the device
AppRegistry.registerComponent('Mythology', () => App);

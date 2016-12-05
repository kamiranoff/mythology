// IOS :)
import React from 'react';
import { View } from 'react-native';

import Background from '../components/Background/Background';
import HeroesList from '../components/HeroesList/HeroesList';

import { styles } from './styles';

const Homepage = () => (
  <View style={styles.mainView}>
    <Background>
      <HeroesList />
    </Background>
  </View>
);

// Render to the device
export default Homepage;

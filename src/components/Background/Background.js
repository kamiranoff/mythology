import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

const bg = require('image!Background');

const Background = ({ children }) => (
  <Image source={bg} style={styles.bg}>
    {children}
  </Image>
);

export default Background;

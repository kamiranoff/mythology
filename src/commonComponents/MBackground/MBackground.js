import React, { PropTypes } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

const bg = require('image!oldpaper');
const stars = require('image!stars');

const MBackground = ({ children }) => (
  <View style={styles.mainContainer}>
    <Image source={stars} style={styles.bg}>
      {children}
    </Image>
  </View>
);

MBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MBackground };

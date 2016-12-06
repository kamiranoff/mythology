import React, { PropTypes } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

const bg = require('image!oldpaper');

const Background = ({ children }) => (
  <View style={styles.mainContainer}>
    <Image style={styles.bg}>
      {children}
    </Image>
  </View>
);

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Background };

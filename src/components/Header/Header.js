import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{title.toUpperCase()}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

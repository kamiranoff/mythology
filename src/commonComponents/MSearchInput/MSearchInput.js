import React, { PropTypes } from 'react';
import { View, Image, TextInput } from 'react-native';

import { TEXT_3 } from '../../constants/styles';
import styles from './styles';

const glass = require('./../../assets/images/magnifying-glass/magnifying-glass.png');
const glassbw = require('./../../assets/images/magnifying-glass-bw/magnifying-glass-bw.png');

const MSearchInput = ({ value, onSearchChange, placeholder }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.textInput}
      value={value}
      placeholder={placeholder}
      placesholderTextColor={TEXT_3}
      onChangeText={val => onSearchChange(val)}
    />
    <Image
      style={styles.glass}
      source={value ? glass : glassbw}
    />
  </View>
);

MSearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

MSearchInput.defaultProps = {
  value: '',
};

export { MSearchInput };

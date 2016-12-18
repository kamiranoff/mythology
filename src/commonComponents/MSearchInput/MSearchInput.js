import React, { PropTypes } from 'react';
import { View, Image, TextInput } from 'react-native';

import { TEXT_3 } from '../../constants/styles';
import { styles } from './styles';

const glass = require('image!magnifying-glass');
const glassbw = require('image!magnifying-glass-bw');

const MSearchInput = ({ value, onSearchChange, placeholder }) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        placesholderTextColor={TEXT_3}
        onChangeText={(value) => onSearchChange(value)}
      />
      <Image
        style={styles.glass}
        source={value ? glass : glassbw}
      />
    </View>
  );
};

MSearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

MSearchInput.defaultProps = {
  value: '',
};

export { MSearchInput };

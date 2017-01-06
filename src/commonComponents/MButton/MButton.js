import React, { PropTypes } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const MButton = ({
  buttonText,
  onPress,
  overrideStyleBtn,
  overrideStyleText
}) => (
  <TouchableOpacity
    style={[styles.button, overrideStyleBtn]}
    onPress={onPress}
  >
    <Text style={[styles.text, overrideStyleText]}>{buttonText}</Text>
  </TouchableOpacity>
);

MButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  overrideStyleBtn: PropTypes.object,
  overrideStyleText: PropTypes.object
};

export { MButton };

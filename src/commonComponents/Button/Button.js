import React, { PropTypes } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

const Button = ({ buttonText, onPress }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text style={styles.text} >{buttonText}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export { Button };

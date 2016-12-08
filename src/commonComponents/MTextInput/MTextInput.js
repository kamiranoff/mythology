import React, { PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';

import { TEXT_COLOR_3 } from '../../constants/styles';
import { styles } from './styles';

const MTextInput = ({
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  autoCorrect,
}) => (
  <View style={styles.container}>
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{label}</Text>
    </View>
    <TextInput
      value={value}
      style={styles.textInput}
      placeholderTextColor={TEXT_COLOR_3}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      autoCorrect={autoCorrect}
    />
    <View style={styles.inputDecoration}/>
  </View>
);

MTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
};

MTextInput.defaultProps = {
  value: '',
};

export { MTextInput };

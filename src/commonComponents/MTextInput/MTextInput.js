import React, { PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

const MTextInput = ({ label, onChangeText, value }) => (
  <View style={styles.container}>
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{label}</Text>
    </View>
    <TextInput
      value={value}
      style={styles.textInput}
      onChangeText={onChangeText}
      multiline
      placeholder="Username"
    />
  </View>
);

MTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export { MTextInput };

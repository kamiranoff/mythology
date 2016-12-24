import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const MErrorMessage = ({ errorMessage }) => (
  <View>
    <Text style={styles.errorMessage}>{errorMessage}</Text>
  </View>
);

MErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export { MErrorMessage };

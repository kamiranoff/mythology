import React, { PropTypes } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { styles } from './styles';

const MSpinner = ({ size }) => (
  <View style={styles.spinner}>
    <ActivityIndicator
      size={size || 'small'}
    />
  </View>
);

MSpinner.propTypes = {
  size: PropTypes.string,
};

export { MSpinner };

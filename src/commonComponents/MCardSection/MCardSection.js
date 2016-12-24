import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';

const MCardSection = ({ children }) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);

MCardSection.propTypes = {
  children: PropTypes.node,
};

export { MCardSection };

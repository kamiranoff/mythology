import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

const CardSection = ({ children }) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);

CardSection.propTypes = {
  children: PropTypes.node,
};

// export CardSection: CardSection
export { CardSection };

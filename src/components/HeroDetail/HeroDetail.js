import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

const HeroDetail = ({ children }) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);

HeroDetail.propTypes = {
  children: PropTypes.node,
};

export default HeroDetail;

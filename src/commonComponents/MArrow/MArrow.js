import React, { PropTypes } from 'react';
import { Image } from 'react-native';

import styles from './styles';

const sword = require('../../assets/images/sword/sword.png');

const MArrow = ({
  overrideStyleArrow,
}) => (
    <Image
      style={[styles.arrowImg,overrideStyleArrow]}
      source={sword}
    />
);

MArrow.propTypes = {
  overrideStyleArrow: PropTypes.object,
};

export { MArrow };

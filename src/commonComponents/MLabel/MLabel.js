import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const MLabel = ({ category }) => {
  const typeViewStyleClass = category.replace(' ', '_');
  const typeTextStyleClass = `${category.replace(' ', '_')}_text`;
  return (
    <View
      style={[styles.listElementTypeContainer, styles[typeViewStyleClass]]}
    >
      <Text
        style={[styles.listElementType, styles[typeTextStyleClass]]}
      >
        {category}
      </Text>
    </View>
  );
};

MLabel.propTypes = {
  category: PropTypes.string.isRequired,
};

export { MLabel };

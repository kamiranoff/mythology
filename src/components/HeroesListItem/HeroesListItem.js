import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MCardSection } from '../../commonComponents';

import { styles } from './styles';

const HeroesListItem = ({ rowData, rowID, onPress }) => {
  const typeViewStyleClass = rowData.category.replace(' ', '_');
  const typeTextStyleClass = `${rowData.category.replace(' ', '_')}_text`;
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <MCardSection
        key={rowData.name + rowID}
      >
        <Text style={styles.listElementName}>{rowData.name}</Text>
        <View
          style={[styles.listElementTypeContainer, styles[typeViewStyleClass]]}
        >
          <Text
            style={[styles.listElementType, styles[typeTextStyleClass]]}
          >
            {rowData.category}
          </Text>
        </View>
      </MCardSection>
    </TouchableOpacity>
  );
};

HeroesListItem.propTypes = {};

export default HeroesListItem;
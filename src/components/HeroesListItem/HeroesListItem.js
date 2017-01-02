import React, { PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MCardSection, MLabel } from '../../commonComponents';

import styles from './styles';

const HeroesListItem = ({ rowData, rowID, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <MCardSection
      key={rowData.name + rowID}
    >
      <Text
        style={styles.listElementTitle}
      >
        {rowData.name}
      </Text>
      <MLabel
        category={rowData.category}
      />
    </MCardSection>
  </TouchableOpacity>
);

HeroesListItem.propTypes = {
  rowData: PropTypes.object.isRequired,
  rowID: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default HeroesListItem;

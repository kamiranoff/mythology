import React, { PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MCardSection, MLabel } from '../../commonComponents';

import { styles } from './styles';

const HeroesListItem = ({ rowData, rowID, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <MCardSection
        key={rowData.name + rowID}
      >
        <Text style={styles.listElementName}>{rowData.name}</Text>
        <MLabel category={rowData.category}/>
      </MCardSection>
    </TouchableOpacity>
  );
};

HeroesListItem.propTypes = {};

export default HeroesListItem;

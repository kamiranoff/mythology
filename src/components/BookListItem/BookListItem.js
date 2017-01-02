import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { MCardSection } from '../../commonComponents';

import styles from './styles';

const BookListItem = ({ rowData, rowID, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <MCardSection
      key={rowData.title + rowID}
    >
      {rowData.images && !rowData.images.thumbnail ? null :
      <Image
        style={styles.listImage}
        source={{ uri: rowData.images.thumbnail }}
      />
      }
      <View style={styles.listElementTextContainer}>
        <Text style={styles.listElementTitle}>{rowData.title}</Text>
        <Text style={styles.listElementSubtitle}>{rowData.author}</Text>
      </View>
    </MCardSection>
  </TouchableOpacity>
);


BookListItem.propTypes = {
  rowData: PropTypes.object.isRequired,
  rowID: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default BookListItem;

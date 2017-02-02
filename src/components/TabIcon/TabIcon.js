import React, { PropTypes } from 'react';
import { View, Image, Text } from 'react-native';

import { TEXT_2, TEXT_SELECTED_1 } from '../../constants/styles';

const book = require('../../assets/images/book/book.png');
const quill = require('../../assets/images/quill/quill.png');
const pantheon = require('../../assets/images/pantheon/pantheon.png');

const getIcon = (title) => {
  let icon = null;
  switch (title.toUpperCase()) {
    case 'BOOKS':
      icon = book;
      return icon;
    case 'PANTHEON':
      icon = pantheon;
      return icon;
    case 'QUOTES':
      icon = quill;
      return icon;
    default :
      icon = book;
      return icon;
  }
};

const TabIcon = ({ selected, title }) => (
  <View
    style={{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexGrow: 1,
      height: null,
    }}
  >
    <Image
      style={{
        marginBottom: 5,
        width: 25,
        height: 25,
        resizeMode: 'contain'
      }}
      source={getIcon(title)}
    />
    <Text style={{ color: selected ? TEXT_SELECTED_1 : TEXT_2 }}>{title}</Text>
  </View>
);

TabIcon.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default TabIcon;

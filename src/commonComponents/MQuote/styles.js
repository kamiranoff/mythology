// @TODO NEEDS CLEAN UP
import Dimensions from 'Dimensions';
import {
  StyleSheet,
} from 'react-native';

import {
  TEXT_2,
} from '../../constants/styles';

export default StyleSheet.create({
  quoteContainer: {
    flex: 1,
  },
  quoteText: {
    color: TEXT_2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'transparent',
    fontFamily: 'Aquifer',
    fontSize: 40,
    lineHeight: 40,
    padding: 15,
    height: Dimensions.get('window').height - 300,

  },
  quoteAuthor: {
    fontSize: 20,
    fontStyle: 'italic',
    color: TEXT_2,
    fontFamily: 'Refuge',
    margin: 10,
    textAlign: 'right',

  },
  leftQuote: {
    margin: 15,
    width: 22,
    height: 22,
  },
  rightQuote: {
    margin: 15,
    alignSelf: 'flex-end',
    width: 22,
    height: 22,
  },
});

// @TODO NEEDS CLEAN UP
import {
  StyleSheet,
} from 'react-native';

import {
  TEXT_2,
} from '../../constants/styles';

export default StyleSheet.create({
  quoteContainer: {
    borderRadius: 6,
  },
  quoteText: {
    fontSize: 24,
    color: TEXT_2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'transparent',
    margin: 15,
  },
  quoteAuthor: {
    fontSize: 12,
    fontStyle: 'italic',
    color: TEXT_2,
    fontFamily: 'Achilles',
    margin: 15,
    textAlign: 'right',
  },
});

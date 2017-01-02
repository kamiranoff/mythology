// @TODO NEEDS CLEAN UP
import {
  StyleSheet,
} from 'react-native';

import {
  TEXT_2,
  TEXT_5,
} from '../../constants/styles';

export default StyleSheet.create({
  listElementTextContainer: {
    flex: 5,
    marginLeft: 20,
  },
  listElementTitle: {
    fontSize: 20,
    color: TEXT_2,
  },
  listElementSubtitle: {
    fontSize: 14,
    color: TEXT_5,
    fontStyle: 'italic',
    flexWrap: 'nowrap',
  },
  listImage: {
    flex: 1,
    height: 50,
    resizeMode: 'contain',
  },
});

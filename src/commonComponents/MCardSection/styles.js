import {
  StyleSheet,
} from 'react-native';

import { BORDER } from '../../constants/styles';

export default StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center', // @TODO Should be dynamic
  },
});

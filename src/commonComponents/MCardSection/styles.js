import {
  StyleSheet,
} from 'react-native';

import { BORDER } from '../../constants/styles';

export const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
  },
});

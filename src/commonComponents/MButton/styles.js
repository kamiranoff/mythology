// @TODO NEEDS CLEAN UP
import {
  StyleSheet,
} from 'react-native';

import { BORDER_COLOR } from '../../constants/styles';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    height:40,
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
  },
});

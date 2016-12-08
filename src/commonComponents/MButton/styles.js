// @TODO NEEDS CLEAN UP
import {
  StyleSheet,
} from 'react-native';

import { BORDER_COLOR, FONT_SIZE_XL, TEXT_COLOR_1, TEXT_COLOR_2 } from '../../constants/styles';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: BORDER_COLOR,
    borderRadius: 1,
    height: 40,
    marginHorizontal: 10,
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: FONT_SIZE_XL,
    backgroundColor: 'transparent',
    color: TEXT_COLOR_1,
  },
});

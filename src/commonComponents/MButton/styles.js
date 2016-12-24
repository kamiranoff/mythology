// @TODO NEEDS CLEAN UP
import {
  StyleSheet,
} from 'react-native';

import { FONT_SIZE_XL, TEXT_1, BACKGROUND_3 } from '../../constants/styles';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_3,
    borderRadius: 6,
    height: 45,
    margin: 10,
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: FONT_SIZE_XL,
    backgroundColor: 'transparent',
    color: TEXT_1,
  },
});

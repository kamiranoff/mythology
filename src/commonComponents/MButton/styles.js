// @TODO NEEDS CLEAN UP
import {
  StyleSheet,
} from 'react-native';

import { FONT_SIZE_XL, TEXT_1, BACKGROUND_4, BORDER_2 } from '../../constants/styles';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_4,
    borderRadius: 20,
    height: 45,
    marginVertical: 10,
    marginHorizontal: 50,
    borderWidth:1,
    borderColor: BORDER_2,
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: FONT_SIZE_XL,
    backgroundColor: 'transparent',
    color: TEXT_1,
  },
});

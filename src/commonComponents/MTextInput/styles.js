import {
  StyleSheet,
} from 'react-native';

import { TEXT_3, BORDER, FONT_SIZE_L, FONT_SIZE_XL } from '../../constants/styles';

export default StyleSheet.create({
  container: {
    height: 80,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  labelContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    fontSize: FONT_SIZE_XL,
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    color: TEXT_3,
  },
  textInput: {
    color: TEXT_3,
    fontSize: FONT_SIZE_L,
    height: 40,

  },
  inputDecoration: {
    backgroundColor: BORDER,
    height: 2,
  },
});

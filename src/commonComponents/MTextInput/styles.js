import {
  StyleSheet,
} from 'react-native';

import { TEXT_COLOR_2, TEXT_COLOR_3, BORDER_COLOR, FONT_SIZE_L, FONT_SIZE_XL } from '../../constants/styles';

export const styles = StyleSheet.create({
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
    color: TEXT_COLOR_3,
  },
  textInput: {
    color: TEXT_COLOR_3,
    fontSize: FONT_SIZE_L,
    height: 40,

  },
  inputDecoration: {
    backgroundColor: BORDER_COLOR,
    height: 2,
  },
});

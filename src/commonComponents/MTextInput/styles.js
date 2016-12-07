import {
  StyleSheet,
} from 'react-native';

import { TEXT_COLOR_2, BORDER_COLOR, FONT_SIZE_L, FONT_SIZE_XL } from '../../constants/styles';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  labelContainer: {
    paddingLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    fontSize: FONT_SIZE_XL,
    alignSelf: 'center',
  },
  textInput: {
    color: TEXT_COLOR_2,
    paddingHorizontal: 5,
    fontSize: FONT_SIZE_L,
    height: 40,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 2,
  },
});

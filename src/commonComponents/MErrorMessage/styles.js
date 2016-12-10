import {
  StyleSheet,
} from 'react-native';

import { FONT_SIZE_M, ERROR_TEXT_COLOR } from '../../constants/styles';

export const styles = StyleSheet.create({
  errorMessage: {
    textAlign: 'center',
    padding: 10,
    fontSize: FONT_SIZE_M,
    color: ERROR_TEXT_COLOR,
  },
});
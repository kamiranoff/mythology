import {
  StyleSheet,
} from 'react-native';

import { FONT_SIZE_M, ERROR_TEXT } from '../../constants/styles';

export const styles = StyleSheet.create({
  errorMessage: {
    textAlign: 'center',
    padding: 10,
    fontSize: FONT_SIZE_M,
    color: ERROR_TEXT,
  },
});
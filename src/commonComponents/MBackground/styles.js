import {
  StyleSheet,
} from 'react-native';

import { BACKGROUND_COLOR_1 } from '../../constants/styles';

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 64,
    marginBottom: 50,
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  bg: {
    backgroundColor: BACKGROUND_COLOR_1,
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
});

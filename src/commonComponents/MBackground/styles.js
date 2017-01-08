import {
  StyleSheet,
} from 'react-native';

import { BACKGROUND_2, NAVBAR_HEIGHT, TABBAR_HEIGHT } from '../../constants/styles';

export default StyleSheet.create({
  mainContainer: {
    marginTop: NAVBAR_HEIGHT,
    marginBottom: TABBAR_HEIGHT,
    flexGrow: 1,
    backgroundColor: BACKGROUND_2,

  },
  bg: {
    flexGrow: 1,

  },
});

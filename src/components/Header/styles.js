import {
  StyleSheet,
} from 'react-native';

import { COLOR_2, BACKGROUND_COLOR_1, SHADOW_COLOR_1 } from '../../constants/styles';

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: BACKGROUND_COLOR_1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: SHADOW_COLOR_1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  textStyle: {
    fontSize: 25,
    color: COLOR_2,
  },
});

export default styles;

import {
  StyleSheet,
} from 'react-native';

import { TEXT_4, BACKGROUND_1, SHADOW_1 } from '../../constants/styles';

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: BACKGROUND_1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: SHADOW_1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  textStyle: {
    fontSize: 25,
    color: TEXT_4,
  },
});

export default styles;

import {
  StyleSheet,
} from 'react-native';

import { TEXT_3, FONT_SIZE_L, BACKGROUND_1, BACKGROUND_3 } from '../../constants/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: BACKGROUND_3,
    alignItems:'center',
  },
  textInput: {
    flex: 9,
    backgroundColor: BACKGROUND_1,
    color: TEXT_3,
    fontSize: FONT_SIZE_L,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 10,

  },
  glass: {
    flex: 1,
    height: 40,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
});

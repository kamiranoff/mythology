import {
  StyleSheet,
} from 'react-native';

import { TEXT_COLOR_2, BACKGROUND_COLOR_1 } from '../../constants/styles';

export const styles = StyleSheet.create({
  listElementName: {
    fontSize: 20,
    flex: 1,
    color: TEXT_COLOR_2,
    alignItems: 'center',
  },
  listElementTypeContainer: {
    alignSelf: 'flex-end',
    backgroundColor: BACKGROUND_COLOR_1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  listElementType: {
    fontSize: 15,
    textAlign: 'right',
    color: TEXT_COLOR_2,
  },
  listContainer: {
    backgroundColor: 'transparent',
  },
});

import {
  StyleSheet,
} from 'react-native';

import { BORDER_COLOR } from '../../constants/styles';

export const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: BORDER_COLOR,
    borderBottomWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',

  },
});

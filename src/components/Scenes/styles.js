import { StyleSheet } from 'react-native';

import { BACKGROUND_1, BACKGROUND_2, SHADOW_2 } from '../../constants/styles';

export default StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0.5,
    borderColor: BACKGROUND_1,
    backgroundColor: BACKGROUND_2,
    opacity: 1,
    height: 60,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1,
  },
  navbarStyle: {
    backgroundColor: BACKGROUND_2,
    borderBottomColor: BACKGROUND_1,
  },
  navbarStyleWidthShadow: {
    backgroundColor: BACKGROUND_2,
    borderBottomColor: BACKGROUND_1,
    shadowColor: SHADOW_2,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.5
  },
  extraShadow: {
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowRadius: 5,
    shadowOpacity: 0.6
  }
});

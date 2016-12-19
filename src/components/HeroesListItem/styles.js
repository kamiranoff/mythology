// @TODO NEEDS CLEAN UP
import {
  StyleSheet,
} from 'react-native';

import {
  TEXT_2,
  TITAN_BACKGROUND,
  KING_BACKGROUND,
  DEMIGOD_BACKGROUND,
  DEITY_BACKGROUND,
  SEA_DEITY_BACKGROUND,
  PRIMORDIAL_DEITY_BACKGROUND,
  TEXT_1,
  GOD_BACKGROUND,
  GIANT_BACKGOURND,
  NYMPH_BACKGROUND,
} from '../../constants/styles';

export const styles = StyleSheet.create({
  listElementName: {
    fontSize: 16,
    flex: 1,
    color: TEXT_2,
    alignItems: 'center',
  },
  listElementTypeContainer: {
    alignSelf: 'flex-end',
    borderRadius: 6,
  },
  listElementType: {
    fontSize: 12,
    textAlign: 'right',
    color: TEXT_1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'transparent',
  },
  titan: {
    backgroundColor: TITAN_BACKGROUND,
  },
  king: {
    backgroundColor: KING_BACKGROUND,
    borderRadius: 6,
  },
  demigod: {
    backgroundColor: DEMIGOD_BACKGROUND,
  },
  deity: {
    backgroundColor: DEITY_BACKGROUND,
  },
  deity_text: {
    color: TEXT_2,
  },
  sea_deity: {
    backgroundColor: SEA_DEITY_BACKGROUND,
  },
  primordial_deity: {
    backgroundColor: PRIMORDIAL_DEITY_BACKGROUND,
  },
  major_olympians: {
    backgroundColor: GOD_BACKGROUND,
  },
  goddess: {
    backgroundColor: GOD_BACKGROUND,
  },
  giant: {
    backgroundColor: GIANT_BACKGOURND,
  },
  giant_text: {
    color: TEXT_2,
  },
  nymph: {
    backgroundColor: NYMPH_BACKGROUND,
  },
});

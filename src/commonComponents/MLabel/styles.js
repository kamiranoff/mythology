// @TODO NEEDS CLEAN UP
import {
  StyleSheet,
} from 'react-native';

import {
  TEXT_2,
  MINOR_FIGURE_BACKGROUND,
  TITAN_BACKGROUND,
  KING_BACKGROUND,
  DEMIGOD_BACKGROUND,
  DEITY_BACKGROUND,
  SEA_DEITY_BACKGROUND,
  SKY_DEITY_BACKGROUND,
  PRIMORDIAL_DEITY_BACKGROUND,
  TEXT_1,
  GOD_BACKGROUND,
  GIANT_BACKGOURND,
  NYMPH_BACKGROUND,
  RUSTIC_DEITY_BACKGROUND,
  HERO_BACKGROUND,
  HEALTH_DEITY_BACKGROUND,
  DEIFIED_MORTAL_BACKGROUND,
  CREATURE_BACKGROUND,
  AMAZON_BACKGROUND,
SEER_ORACLE_BACKGROUND,
} from '../../constants/styles';

export default StyleSheet.create({
  listElementTypeContainer: {
    borderRadius: 6,
  },
  listElementType: {
    fontSize: 12,
    color: TEXT_1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'transparent',
  },
  twelve_titan: {
    backgroundColor: TITAN_BACKGROUND,
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
  other_deity: {
    backgroundColor: DEITY_BACKGROUND,
  },
  other_deity_text: {
    color: TEXT_2,
  },
  sea_deity: {
    backgroundColor: SEA_DEITY_BACKGROUND,
  },
  sky_deity: {
    backgroundColor: SKY_DEITY_BACKGROUND,
  },
  sky_deity_text: {
    color: TEXT_2,
  },
  chthonic_deity: {
    backgroundColor: PRIMORDIAL_DEITY_BACKGROUND,
  },
  rustic_deity: {
    backgroundColor: RUSTIC_DEITY_BACKGROUND,
  },
  agricultural_deity: {
    backgroundColor: RUSTIC_DEITY_BACKGROUND,
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
  hero: {
    backgroundColor: HERO_BACKGROUND,
  },
  hero_text: {
    color: TEXT_2,
  },
  deified_mortal: {
    backgroundColor: DEIFIED_MORTAL_BACKGROUND,
  },
  deified_mortal_text: {
    color: TEXT_2,
  },
  minor_figure: {
    backgroundColor: MINOR_FIGURE_BACKGROUND,
  },
  minor_figure_text: {
    color: TEXT_2,
  },
  health_deity: {
    backgroundColor: HEALTH_DEITY_BACKGROUND,
  },
  creature: {
    backgroundColor: CREATURE_BACKGROUND,
  },
  amazon: {
    backgroundColor: AMAZON_BACKGROUND,
  },
  seer_oracle: {
    backgroundColor: SEER_ORACLE_BACKGROUND,
  },
});

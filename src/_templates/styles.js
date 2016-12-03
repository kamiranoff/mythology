import {
  StyleSheet,
} from 'react-native';

import { hasNativeFeature } from '../constants/device';

import {
  COLOR_PLANET_WHITE,
  COLOR_PLANET_WHITE_LIGHT,
  COLOR_PLANET_YELLOW,
  FONT_PLANET_XXXLARGE,
} from '../constants/styles';

import {
  IS_SMALL_SCREEN,
  VIEW_HEIGHT,
  WINDOW_WIDTH,
} from '../constants/dimensions';

const hasBoxShadow = hasNativeFeature('box-shadow');

export const underlayColor = COLOR_PLANET_YELLOW;
export const textColor = COLOR_PLANET_WHITE;

const viewHeight = VIEW_HEIGHT;

export const styles = StyleSheet.create({

});

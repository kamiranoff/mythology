import {
  Platform,
  Dimensions,
} from 'react-native';

const dimWindow = Dimensions.get('window');
export const NAVBAR_HEIGHT = (Platform.OS === 'ios') ? 52 : 62;
export const STATUSBAR_HEIGHT = (Platform.OS === 'ios') ? 20 : 24;
export const TABBAR_HEIGHT = 50;
export const WINDOW_WIDTH = dimWindow.width;
export const WINDOW_HEIGHT = dimWindow.height;
export const VIEW_HEIGHT = WINDOW_HEIGHT - NAVBAR_HEIGHT - STATUSBAR_HEIGHT;

export const IS_SMALL_SCREEN = (WINDOW_HEIGHT <= 480);
export const IS_MEDIUM_SCREEN = (WINDOW_HEIGHT > 480) && (WINDOW_HEIGHT <= 568);
export const IS_LARGE_SCREEN = (WINDOW_HEIGHT > 568);

export const MAP_LEGEND_WIDTH = WINDOW_WIDTH * 0.6;
export const MAP_LEGEND_HEIGHT = 120;
export const MAP_HOTSPOT_WIDTH = 30;
export const MAP_HOTSPOT_HEIGHT = 30;
export const MAP_SUB_HOTSPOT_WIDTH = 25;
export const MAP_SUB__HOTSPOT_HEIGHT = 25;
export const HOTSPOT_LEFT_SHIFT = 15;
export const HOTSPOT_TOP_SHIFT = 10;

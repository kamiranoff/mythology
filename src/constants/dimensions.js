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

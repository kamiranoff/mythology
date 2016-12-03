
import { Platform, StyleSheet } from 'react-native';
import { IS_SMALL_SCREEN } from './dimensions';

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "COLOR_PLANET.*" }] */
export const COLOR_PLANET_GREEN_LIGHT = '#78bd7e';
export const COLOR_PLANET_GREEN_DARK = '#5fa765';
export const COLOR_PLANET_GREY_LIGHT = '#848584';
export const COLOR_PLANET_GREY_DARK = '#333739';
export const COLOR_PLANET_BLUE = '#10a6cb';
export const COLOR_PLANET_YELLOW = '#eaca21';
export const COLOR_PLANET_WHITE = '#f5f9f5';
export const COLOR_PLANET_RED = '#e00030';
export const COLOR_PLANET_BLACK = '#000000';
export const COLOR_PLANET_WHITE_LIGHT = '#FEFEFE';
export const COLOR_PLANET_GREY_ULTRALIGHT = '#BCBEBC'; // nouveau ? Bordures des boutons...
export const COLOR_PLANET_GREY_SECTION = '#E8EDE8';

/*
78 bd 7e => 7c c8 7d
 */

// Font Size 16
export const FONT_RATIO = IS_SMALL_SCREEN ? 0.45 : 0.6;
export const FONT_PLANET_XXXSMALL = Math.round(16 * FONT_RATIO);
export const FONT_PLANET_XXSMALL = Math.round(20 * FONT_RATIO);
export const FONT_PLANET_XSMALL = Math.round(22 * FONT_RATIO);
export const FONT_PLANET_SMALL = Math.round(24 * FONT_RATIO);
export const FONT_PLANET_NORMAL = Math.round(25 * FONT_RATIO);
export const FONT_PLANET_XNORMAL = Math.round(27 * FONT_RATIO);
export const FONT_PLANET_LARGE = Math.round(30 * FONT_RATIO);
export const FONT_PLANET_XLARGE = Math.round(40 * FONT_RATIO);
export const FONT_PLANET_XXLARGE = Math.round(50 * FONT_RATIO);
export const FONT_PLANET_XXXLARGE = Math.round(70 * FONT_RATIO);

let avenirHeavy;
let avenirRoman;
let avenirMedium;
let avenirBook;
let avenirBlack;

if (Platform.OS === 'ios') {
  avenirHeavy = 'AvenirLTStd-Heavy';
  avenirRoman = 'AvenirLTStd-Roman';
  avenirMedium = 'AvenirLTStd-Medium';
  avenirBook = 'AvenirLTStd-Book';
  avenirBlack = 'AvenirLTStd-Black';
} else {
  avenirHeavy = 'avenirltstd_heavy';
  avenirRoman = 'avenirltstd_roman';
  avenirMedium = 'avenirltstd_medium';
  avenirBook = 'avenirltstd_book';
  avenirBlack = 'avenirltstd_black';
}

export const FAMILY_PLANET_HEAVY = avenirHeavy;
export const FAMILY_PLANET_ROMAN = avenirRoman;
export const FAMILY_PLANET_MEDIUM = avenirMedium;
export const FAMILY_PLANET_BOOK = avenirBook;
export const FAMILY_PLANET_BLACK = avenirBlack;


export const STYLES_PLANET = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: FONT_PLANET_XXSMALL,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textNormal: {
    fontSize: FONT_PLANET_XXSMALL,
  },

  textPlanet1: {
    fontFamily: 'avenirltstd_heavy',
    color: COLOR_PLANET_GREY_DARK,
    fontSize: FONT_PLANET_LARGE,
  },
  textPlanet2: {
    fontFamily: 'avenirltstd_heavy',
    color: COLOR_PLANET_BLUE,
    fontSize: FONT_PLANET_XXXSMALL,
  },
  textPlanet3: {
    fontFamily: 'avenirltstd_roman',
    color: COLOR_PLANET_GREY_LIGHT,
    fontSize: FONT_PLANET_SMALL,
  },
  textPlanet4: {
    fontFamily: 'avenirltstd_heavy',
    color: COLOR_PLANET_GREY_DARK,
    fontSize: FONT_PLANET_XLARGE,
  },
  textPlanet5: {
    fontFamily: 'avenirltstd_roman',
    color: COLOR_PLANET_GREY_LIGHT,
    fontSize: FONT_PLANET_LARGE,
  },
  textPlanet6: {
    fontFamily: 'avenirltstd_medium',
    color: COLOR_PLANET_GREY_LIGHT,
    fontSize: FONT_PLANET_NORMAL,
  },
  textPlanet7: {
    fontFamily: 'avenirltstd_book',
    color: COLOR_PLANET_GREY_LIGHT,
    fontSize: FONT_PLANET_SMALL,
  },
  textPlanet8: {
    fontFamily: 'avenirltstd_book',
    color: '#3b3b3b',
    fontSize: FONT_PLANET_SMALL,
  },
  textPlanet9: {
    fontFamily: 'avenirltstd_heavy',
    color: '#ffffff',
    fontSize: FONT_PLANET_SMALL,
  },
  textPlanet10: {
    fontFamily: 'avenirltstd_heavy',
    color: '#ffffff',
    fontSize: FONT_PLANET_XXSMALL,
  },
  textPlanet11: {
    fontFamily: 'avenirltstd_heavy',
    color: COLOR_PLANET_GREY_DARK,
    fontSize: FONT_PLANET_NORMAL,
  },
  textPlanet12: {
    fontFamily: 'avenirltstd_heavy',
    color: COLOR_PLANET_GREY_LIGHT,
    fontSize: FONT_PLANET_XXSMALL,
  },
  textPlanet13: {
    fontFamily: 'avenirltstd_black',
    color: COLOR_PLANET_GREEN_DARK,
    fontSize: FONT_PLANET_XXSMALL,
  },
  textPlanet14: {
    fontFamily: 'avenirltstd_heavy',
    color: COLOR_PLANET_GREEN_DARK,
    fontSize: FONT_PLANET_XXLARGE,
  },
  textPlanet15: {
    fontFamily: 'avenirltstd_heavy',
    color: COLOR_PLANET_GREY_DARK,
    fontSize: FONT_PLANET_XLARGE,
  },
  textPlanet16: {
    fontFamily: 'avenirltstd_roman',
    color: COLOR_PLANET_GREEN_DARK,
    fontSize: FONT_PLANET_LARGE,
  },
});

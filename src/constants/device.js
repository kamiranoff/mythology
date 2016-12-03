import DeviceInfo from 'react-native-device-info';
import { Platform } from 'react-native';

export const DEVICE_COUNTRY = DeviceInfo.getDeviceCountry();
export const DEVICE_LOCALE = DeviceInfo.getDeviceLocale();
export const DEVICE_APP_VERSION = DeviceInfo.getVersion();

export const hasNativeFeature = (feature) => {
  switch (feature) {
    case 'box-shadow':
      if (Platform.OS === 'android' && Platform.Version < 21) {
        return false;
      }
      return true;

    default:
      return true;
  }
};

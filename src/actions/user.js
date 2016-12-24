import { SET_LOGIN_STATUS } from '../constants/actions';

// eslint-disable-next-line import/prefer-default-export
export const setLoginStatus = loginStatus => ({
  type: SET_LOGIN_STATUS,
  loginStatus,
});

import { SET_LOGIN_STATUS } from '../constants/actions';

export const setLoginStatus = (loginStatus) => ({
  type: SET_LOGIN_STATUS,
  loginStatus,
});

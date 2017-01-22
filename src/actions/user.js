import { AsyncStorage } from 'react-native';
import callApi from '../util/apiCaller';
import getEnvironment from '../constants/environment';
import _ from 'lodash';

import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  RECEIVE_LOGIN_FAILURE,
  SAVE_ITEM_TO_STORAGE,
  SAVE_ITEM_TO_STORAGE_FAILED,
  USER_WITHOUT_TOKEN,
  GET_ITEM_FROM_STORAGE,
  GET_ITEM_FROM_STORAGE_FAILED
} from '../constants/actions';

const ENV = getEnvironment();

const requestLogin = (credentials) => ({
  type: REQUEST_LOGIN,
  isFetching: true,
  isAuthenticated: false,
});

const receiveLogin = (response) => ({
  type: RECEIVE_LOGIN,
  isFetching: false,
  isAuthenticated: true,
  user: response,
});

const receiveLoginFailed = e => ({
  type: RECEIVE_LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  error: e,
});

const saveItemToStorage = (itemName, item) => async(dispatch) => {
  await AsyncStorage.setItem(`@store:${itemName}`, item, (error) => {
    if (error) {
      return dispatch({
        type: SAVE_ITEM_TO_STORAGE_FAILED,
        error: error,
      });
    } else {
      return dispatch({
        type: SAVE_ITEM_TO_STORAGE,
        itemName,
        item
      });
    }
  });
};

const getItemFromStorage = (itemName) => async(dispatch) => {
  let token = null;
  try {
    token = await AsyncStorage.getItem(`@store:${itemName}`);
    dispatch({
      type: GET_ITEM_FROM_STORAGE
    });
    return token;
  } catch (error) {
    dispatch({
      type: GET_ITEM_FROM_STORAGE_FAILED
    });
  }
  return token;
};

export const loginWithToken = () => async(dispatch) => {
  const token = await dispatch(getItemFromStorage('token'));
  if (token) {
    dispatch(requestLogin(token));
    const endPoint = ENV.API.USER_LOGIN;
    const method = 'POST';
    const headers = {
      'content-type': 'application/json'
    };
    const body = {
      token
    };
    return callApi(endPoint, method, headers, body)
      .then((response) => {
        if (_.isEmpty(response) || response.error) {
          dispatch(receiveLoginFailed(response.error));
          throw new Error('Login failed');
        } else {
          dispatch(receiveLogin(response));
        }
      });
  } else {
    dispatch({
      type: USER_WITHOUT_TOKEN,
    });
  }
};

export const loginFromUsernameAndPassword = (credentials) => async(dispatch) => {
  dispatch(requestLogin(credentials));

  const hash = `${credentials.email}:${credentials.password}`;
  const endPoint = ENV.API.USER_LOGIN;
  const method = 'POST';
  const headers = {
    'Authorization': `Basic ${hash}`,
    'content-type': 'application/json'
  };

  return callApi(endPoint, method, headers)
    .then((response) => {
      if (response.error) {
        dispatch(receiveLoginFailed(response.error));
        throw new Error('Login failed');
      } else {
        dispatch(receiveLogin(response));
      }
    });
};

export function login() {
  const token = getItemFromStorage('token');
  if (token) {
    loginWithToken(token);
  }
}

export function signUp(credentials) {
  return (dispatch) => {
    dispatch(requestLogin(credentials));
    const endPoint = ENV.API.USER_SIGN_UP;
    const method = 'POST';
    const headers = {
      'content-type': 'application/json'
    };
    const body = credentials;
    return callApi(endPoint, method, headers, body)
      .then((response) => {
        if (response.error) {
          dispatch(receiveLoginFailed('sorry, we could not create an account'));
        } else {
          const token = response.token;
          dispatch(saveItemToStorage('token', token));
          dispatch(receiveLogin(response));
        }
      });
  };
}

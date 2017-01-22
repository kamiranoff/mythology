import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  RECEIVE_LOGIN_FAILURE,
} from '../constants/actions';

const initialState = {
  isFetching: null,
  liked: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case REQUEST_LOGIN:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.credentials
      };

    case RECEIVE_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: action.error
      };

    case RECEIVE_LOGIN:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      };

    default:
      return state;
  }
}

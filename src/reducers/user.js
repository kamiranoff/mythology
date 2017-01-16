import {
  SET_LOGIN_STATUS,
} from '../constants/actions';

const initialState = {
  isLoggedIn: null,
  liked: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case SET_LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: action.loginStatus,
      };

    default:
      return state;
  }
}

import {
  REQUEST_ALL_GREEKS,
  RECEIVE_ALL_GREEKS,
} from '../constants/actions';

const initialState = {
  greeks: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_ALL_GREEKS:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_ALL_GREEKS:
      return {
        ...state,
        greeks: action.greeks,
      };

    default:
      return state;
  }
};

import callApi from '../util/apiCaller';
import {
  REQUEST_ALL_GREEKS,
  RECEIVE_ALL_GREEKS,
  RECEIVE_ALL_GREEKS_FAILURE,
} from '../constants/actions';
import getEnvironment from '../constants/environment';

const ENV = getEnvironment();

const requestAllGreeks = () => ({
  type: REQUEST_ALL_GREEKS,
});

const receiveAllGreeks = greeks => ({
  type: RECEIVE_ALL_GREEKS,
  greeks,
});

const receiveAllGreeksFailed = e => ({
  type: RECEIVE_ALL_GREEKS_FAILURE,
  error: e,
});

// eslint-disable-next-line import/prefer-default-export
export function fetchAllGreeks(filter) {
  let endPoint = ENV.API.GREEKS;
  if (filter) {
    const searchTerm = filter.trim().toUpperCase();
    endPoint = `${ENV.API.GREEKS}?search=${searchTerm}`;
  }

  return (dispatch) => {
    dispatch(requestAllGreeks());
    return callApi(endPoint)
      .then((greeks) => {
        dispatch(receiveAllGreeks(greeks));
      }).catch((e) => {
        console.log(e);
        dispatch(receiveAllGreeksFailed(e));
      });
  };
}

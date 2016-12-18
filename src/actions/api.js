import callApi from '../util/apiCaller';
import { REQUEST_ALL_GREEKS, RECEIVE_ALL_GREEKS } from '../constants/actions';
import getEnvironment from '../constants/environment';

const ENV = getEnvironment();

const requestAllGreeks = () => {
  return {
    type: REQUEST_ALL_GREEKS,
  };
};

const receiveAllGreeks = (greeks) => {
  return {
    type: RECEIVE_ALL_GREEKS,
    greeks,
  };
};

export function fetchAllGreeks(filter) {
  let endPoint = ENV.API.GREEKS;
  if (filter) {
    const searchTerm = filter.trim().toUpperCase();
    console.log(searchTerm);
    endPoint = `${ENV.API.GREEKS}?search=${searchTerm}`;
  }

  return (dispatch) => {
    dispatch(requestAllGreeks());
    return callApi(endPoint).then((greeks) => {
      dispatch(receiveAllGreeks(greeks));
    });
  };
}

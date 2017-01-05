import callApi from '../util/apiCaller';
import {
  REQUEST_RANDOM_QUOTE,
  RECEIVE_RANDOM_QUOTE,
  RECEIVE_RANDOM_QUOTE_FAILURE,
} from '../constants/actions';
import getEnvironment from '../constants/environment';

const ENV = getEnvironment();

const requestRandomQuote = () => ({
  type: REQUEST_RANDOM_QUOTE,
});

const receiveRandomQuote = quote => ({
  type: RECEIVE_RANDOM_QUOTE,
  quote,
});

const receiveRandomQuoteFailed = e => ({
  type: RECEIVE_RANDOM_QUOTE_FAILURE,
  error: e,
});

// eslint-disable-next-line import/prefer-default-export
export function fetchRandomQuote() {
  const endPoint = ENV.API.RANDOM_QUOTE;

  return (dispatch) => {
    dispatch(requestRandomQuote());
    return callApi(endPoint)
      .then((response) => {
        if (response.error) {
          dispatch(receiveRandomQuoteFailed(response.error));
        } else {
          dispatch(receiveRandomQuote(response));
        }
      });
  };
}

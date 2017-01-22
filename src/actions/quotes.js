import callApi from '../util/apiCaller';
import getEnvironment from '../constants/environment';
import {
  REQUEST_RANDOM_QUOTE,
  RECEIVE_RANDOM_QUOTE,
  RECEIVE_RANDOM_QUOTE_FAILURE,
  REQUEST_QUOTES,
  RECEIVE_QUOTES,
  RECEIVE_QUOTES_FAILURE
} from '../constants/actions';

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

const requestQuotes = () => ({
  type: REQUEST_QUOTES,
});

const receiveQuotes = quotes => ({
  type: RECEIVE_QUOTES,
  quotes,
});

const receiveQuotesFailed = e => ({
  type: RECEIVE_QUOTES_FAILURE,
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

// eslint-disable-next-line import/prefer-default-export
export function fetchQuotes(option, value) {
  let endPoint = ENV.API.QUOTES;
  if (option === 'random') {
    endPoint = `${endPoint}?random=${value}`;
  }
  return (dispatch) => {
    dispatch(requestQuotes());
    return callApi(endPoint)
      .then((response) => {
        if (response.error) {
          dispatch(receiveQuotesFailed(response.error));
        } else {
          dispatch(receiveQuotes(response));
        }
      });
  };
}

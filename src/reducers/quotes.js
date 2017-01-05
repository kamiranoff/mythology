import {
  REQUEST_RANDOM_QUOTE,
  RECEIVE_RANDOM_QUOTE,
  RECEIVE_RANDOM_QUOTE_FAILURE,
} from '../constants/actions';

const initialState = {
  quote: {
    quote: 'Loading...',
    note: 'First lines, Book 1.',
    book: 'The Iliad',
    author: 'Homer',
  },
  loading: true,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_RANDOM_QUOTE:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_RANDOM_QUOTE:
      return {
        ...state,
        quote: action.quote,
      };

    case RECEIVE_RANDOM_QUOTE_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  RECEIVE_BOOKS_FAILURE,
} from '../constants/actions';

const initialState = {
  books: [],
  loading: true,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_BOOKS:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_BOOKS:
      return {
        ...state,
        books: action.books,
      };

    case RECEIVE_BOOKS_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

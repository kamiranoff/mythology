import { combineReducers } from 'redux';

import routes from './routes';
import user from './user';
import figures from './figures';
import books from './books';
import quotes from './quotes';

export default combineReducers({
  routes,
  user,
  figures,
  books,
  quotes,
});

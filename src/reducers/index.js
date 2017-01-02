import { combineReducers } from 'redux';

import routes from './routes';
import user from './user';
import figures from './figures';
import books from './books';

export default combineReducers({
  routes,
  user,
  figures,
  books,
});

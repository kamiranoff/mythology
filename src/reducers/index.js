import { combineReducers } from 'redux';

import routes from './routes';
import user from './user';
import api from './api';

export default combineReducers({
  routes,
  user,
  api,
});

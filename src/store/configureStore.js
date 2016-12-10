import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from '../reducers';

const configureStore = () => {
  let store;

  if (__DEV__) {
    const logger = createLogger({ collapsed: true });
    store = createStore(
      reducer,
      applyMiddleware(thunk, logger),
    );
  } else {
    store = createStore(
      reducer,
      applyMiddleware(thunk),
    );
  }
  return store;
};

export default configureStore;

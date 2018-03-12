import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import createMiddleware from './createMiddelware';

const configureStore = (api, preloadState) => {
  const middleware = createMiddleware(api);
  const store = createStore(
    rootReducer,
    preloadState,
    compose(
      applyMiddleware(middleware, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}

export default configureStore;

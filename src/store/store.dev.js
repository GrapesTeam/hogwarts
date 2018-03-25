import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import createMiddleware from './createMiddelware';
import DevTools from '../DevTools/DevTools';

const configureStore = (api, preloadState) => {
  const middleware = createMiddleware(api);
  const store = createStore(
    rootReducer,
    preloadState,
    compose(
      applyMiddleware(middleware, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : DevTools.instrument()
    )
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;

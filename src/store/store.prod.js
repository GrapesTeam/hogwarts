import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import createMiddleware from './createMiddelware'

const configureStore = (api, preloadState) => {
  const middleware = createMiddleware(api)
  const store = createStore(
    rootReducer,
    preloadState,
    applyMiddleware(middleware)
  );

  return store
}

export default configureStore

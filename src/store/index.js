import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { addLocaleData } from 'react-intl';
import api from 'api';
import rootReducer from './rootReducer';
import createMiddleware from './createMiddleware';

async function loadLocale() {
  let translations;
  let localeData;
  let currentLanguage = localStorage.getItem('kp.hl');
  let language = currentLanguage || navigator.language;
  let newlanguage = language;
  try {
    translations = await import(/* webpackChunkName: "/i18n/[request]" */ `i18n/${language}.json`);
    localeData = await import(/* webpackChunkName: "/i18n/locale/[request]_locale" */ `react-intl/locale-data/${
      language.indexOf('cn') !== -1 || language.indexOf('tw') !== -1
        ? 'zh'
        : language
    }`);
  } catch (err) {
    language = 'en';
    translations = await import(/* webpackChunkName: "/i18n/[request]" */ `i18n/${language}.json`);
    localeData = await import(/* webpackChunkName: "/i18n/locale/[request]_locale" */ `react-intl/locale-data/${language}`);
    localStorage.setItem('kp.hl', language);
  }
  addLocaleData(localeData);
  if (language === 'cn') newlanguage = 'zh-Hans';
  if (language === 'tw') newlanguage = 'zh-Hant';

  return {
    lang: newlanguage,
    messages: translations
  };
}

const configureStore = (api, preloadState) => {
  let store;
  const middleware = createMiddleware(api);
  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('DevTools/DevTools').default;
    const logger = require('redux-logger').default;
    const { persistState } = require('redux-devtools');

    store = _createStore(
      rootReducer,
      preloadState,
      compose(
        applyMiddleware(middleware, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : DevTools.instrument(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
      )
    );

    if (module.hot) {
      module.hot.accept('./rootReducer', () => {
        store.replaceReducer(rootReducer);
      });
    }
  } else {
    store = _createStore(
      rootReducer,
      preloadState,
      applyMiddleware(middleware)
    );
  }

  return store;
};

export default async function createStore() {
  const locale = await loadLocale();
  const store = configureStore(api, { locale });
  return store;
}

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';
import device from 'current-device';
import ConnectedIntlProvider from 'ConnectedIntlProvider';
import createStore from './store';
import api from './api';
import routes from 'routes';
import './index.css';
import App from './App';
import ItalkiSocket from 'until/socket';
// import registerServiceWorker from './registerServiceWorker';

let store;
const deviceType = device.type;
async function loadLocale() {
  ItalkiSocket.open();
  let translations;
  let localeData;
  let currentLanguage = localStorage.getItem('kp.hl');
  let language = currentLanguage || navigator.language;
  let newlanguage = language;
  try {
    translations = await import(/* webpackChunkName: "/i18n/[request]" */ `i18n/${language}.json`);
    localeData = await import(/* webpackChunkName: "/i18n/[request]_locale" */ `react-intl/locale-data/${
      language.indexOf('cn') !== -1 || language.indexOf('tw') !== -1
        ? 'zh'
        : language
    }`);
  } catch (err) {
    language = 'en';
    translations = await import(/* webpackChunkName: "/i18n/[request]" */ `i18n/${language}.json`);
    localeData = await import(/* webpackChunkName: "/i18n/[request]_locale" */ `react-intl/locale-data/${language}`);
    localStorage.setItem('kp.hl', language);
  }
  addLocaleData(localeData);
  if (language === 'cn') newlanguage = 'zh-Hans';
  if (language === 'tw') newlanguage = 'zh-Hant';

  return {
    language: newlanguage,
    translations
  };
}

const renderApp = (store, deviceType) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedIntlProvider>
        <BrowserRouter>
          <App routes={routes} device={deviceType} />
        </BrowserRouter>
      </ConnectedIntlProvider>
    </Provider>,
    document.getElementById('root')
  );
};

loadLocale().then(({ language: lang, translations: messages }) => {
  store = createStore(api, {
    locale: {
      lang: lang,
      messages
    }
  });
  renderApp(store, deviceType);
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    renderApp(store, deviceType);
  });
}

// TODO
// registerServiceWorker();

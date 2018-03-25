import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import device from 'current-device';
import createStore from './store';
import api from './api';
import routes from 'routes';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(api);
const deviceType = device.type;
const renderApp = (translations = {}, locale = 'en') => {
  ReactDOM.render(
    <IntlProvider locale={locale} messages={translations}>
      <Provider store={store}>
        <BrowserRouter>
          <App routes={routes} device={deviceType} />
        </BrowserRouter>
      </Provider>
    </IntlProvider>,
    document.getElementById('root')
  );
};

async function loadLocale(render) {
  let localeData;
  let translations;
  if (navigator.language.indexOf('en') !== -1) {
    translations = await import(/* webpackChunkName: "/i18n/en" */ 'i18n/en.json');
    localeData = await import(/* webpackChunkName: "/i18n/en_locale" */ 'react-intl/locale-data/en');
  } else {
    translations = await import(/* webpackChunkName: "/i18n/zh_cn" */ 'i18n/cn.json');
    localeData = await import(/* webpackChunkName: "/i18n/zh_locale" */ 'react-intl/locale-data/zh');
  }
  addLocaleData([...localeData]);
  return render(translations);
}

loadLocale(renderApp);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <IntlProvider locale="en">
        <Provider store={store}>
          <BrowserRouter>
            <App routes={routes} device={deviceType} />
          </BrowserRouter>
        </Provider>
      </IntlProvider>,
      document.getElementById('root')
    );
  });
}

// TODO
// registerServiceWorker();

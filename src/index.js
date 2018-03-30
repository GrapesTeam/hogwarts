import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import device from 'current-device';
import ConnectedIntlProvider from 'ConnectedIntlProvider';
import createStore from './store';
import routes from 'routes';
import './index.css';
// import Socket from 'socket';
// import registerServiceWorker from './registerServiceWorker';

let App;
let store;
const deviceType = device.type;
const renderApp = (store, deviceType) => {
  if (process.env.REACT_APP_WEBSITE === 'com') {
    App = require('./App').default;
  } else if (process.env.REACT_APP_WEBSITE === 'cn') {
    App = require('./App').default;
  }
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

initRender();

async function initRender() {
  store = await createStore();
  // Socket.open(store);
  renderApp(store, deviceType);
}

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    renderApp(store, deviceType);
  });
}

// TODO
// registerServiceWorker();

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ConnectedIntlProvider from 'ConnectedIntlProvider';

it('should have render correctly', () => {
  const mockStore = configureMockStore();
  const store = mockStore({ locale: { lang: 'en', messages: {} }});
  mount(
    <Provider store={store}>
      <ConnectedIntlProvider>
        <div />
      </ConnectedIntlProvider>
    </Provider>
  );
});

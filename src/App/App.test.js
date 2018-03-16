import React from 'react'
import { shallow } from 'enzyme'
import App from 'App'
import Header from './Header'

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toContainReact(<Header />)
});

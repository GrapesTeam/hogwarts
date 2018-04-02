import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { RouteWithSubRoutes } from 'routes';

describe('RouteWithSubRoutes', () => {
  const route = {
    path: '/',
    desktop: () => <div className="desktop" />,
    mobile: () => <div className="mobile" />,
    tablet: () => <div className="tablet" />,
  };

  it('render desktop', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <RouteWithSubRoutes {...route} />
      </MemoryRouter>
    );
    expect(wrapper.find('.desktop').length).toBe(1);
    expect(wrapper.find('.mobile').length).toBe(0);
    expect(wrapper.find('.tablet').length).toBe(0);
  });

  it('render tablet', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <RouteWithSubRoutes {...route} device="tablet" />
      </MemoryRouter>
    );
    expect(wrapper.find('.desktop').length).toBe(0);
    expect(wrapper.find('.mobile').length).toBe(0);
    expect(wrapper.find('.tablet').length).toBe(1);
  });

  it('render mobile', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <RouteWithSubRoutes {...route} device="mobile" />
      </MemoryRouter>
    );
    expect(wrapper.find('.desktop').length).toBe(0);
    expect(wrapper.find('.mobile').length).toBe(1);
    expect(wrapper.find('.tablet').length).toBe(0);
  });
});

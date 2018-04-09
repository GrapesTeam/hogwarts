import React from 'react';
import render from 'react-test-renderer';
import { mount } from 'enzyme';
import Menu, { MenuItem } from '../Menu';

describe('MenuItem', () => {
  it('renders correctly', () => {
    const tree = render.create(<MenuItem value="test">Test</MenuItem>);
    expect(tree).toMatchSnapshot();
  });

  it('should fire click event', () => {
    const click = jest.fn();
    const wrapper = mount(
      <Menu>
        <MenuItem value="test" onClick={click}>
          Test
        </MenuItem>
      </Menu>
    );
    wrapper.find('.menu-item').simulate('click');
    expect(click).toBeCalled();
  });

  it('should not fire click event if click is not existed', () => {
    const wrapper = mount(
      <Menu>
        <MenuItem value="test">Test</MenuItem>
      </Menu>
    );
    wrapper.find('.menu-item').simulate('click');
    expect(wrapper.find('.checkmark').length).toBe(1);
  });

  it('should choose item if onClick is missing', () => {
    const wrapper = mount(
      <Menu selected={0}>
        <MenuItem value="test">Test</MenuItem>
      </Menu>
    );
    expect(wrapper.find('.checkmark').length).toBe(1);
  });
});

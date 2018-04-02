import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button>Default</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders main button correctly', () => {
    const tree = renderer.create(<Button iistyle="main">Main</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders error button correctly', () => {
    const tree = renderer
      .create(<Button iistyle="error">Error</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders success button correctly', () => {
    const tree = renderer
      .create(<Button iistyle="success">Success</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders instant-tutoring button correctly', () => {
    const tree = renderer
      .create(<Button iistyle="instant-tutoring">Instant Tutoring</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders big size button correctly', () => {
    const tree = renderer.create(<Button size="big">Big size</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders standard size button correctly', () => {
    const tree = renderer
      .create(<Button size="standard">Standard size</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders medium size button correctly', () => {
    const tree = renderer
      .create(<Button size="medium">Medium size</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders small size button correctly', () => {
    const tree = renderer
      .create(<Button size="small">Small size</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has click event', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Button onClick={fn}>Click</Button>).dive();
    wrapper.find('button').simulate('click');
    expect(fn).toBeCalled();
  });

  it('disabled', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Button disabled>Click</Button>).dive();
    wrapper.find('button').simulate('click');
    expect(fn).not.toBeCalled();
  });
});

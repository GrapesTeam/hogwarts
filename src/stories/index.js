// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// italki ui
import InputField from '../Common/InputField';
import Button from '../italki-ui/Button';
import Menu, { MenuItem, MenuGroup } from '../italki-ui/Menu';

const firstArgAction = decorateAction([
  args => {
    return args.slice(0, 1);
  },
]);

storiesOf('Input', module)
  .add('placeholder text', () => (
    <InputField name="nickname" type="text" placeholder="Enter nickname" />
  ))
  .add('password text', () => (
    <InputField name="nickname" type="password" placeholder="Enter password" />
  ));

storiesOf('Button', module)
  .add('enabled', () => (
    <div>
      <Button onClick={action('button-click')}>Default Button</Button>
      <hr />
      <Button iistyle="main" onClick={firstArgAction('button-click', 'ggg')}>
        Main Button
      </Button>
      <hr />
      <Button iistyle="error">Error Button</Button>
      <hr />
      <Button iistyle="success">Success Button</Button>
      <hr />
      <Button iistyle="instant-tutoring">Instant Tutoring</Button>
    </div>
  ))
  .add('disabled', () => (
    <div>
      <Button disabled>Default Button</Button>
      <hr />
      <Button disabled iistyle="main">
        Main Button
      </Button>
      <hr />
      <Button disabled iistyle="error">
        Error Button
      </Button>
      <hr />
      <Button disabled iistyle="success">
        Success Button
      </Button>
      <hr />
      <Button disabled iistyle="instant-tutoring">
        Instant Tutoring
      </Button>
    </div>
  ))
  .add('small size', () => (
    <div>
      <Button size="small">Default Button</Button>
      <hr />
      <Button size="small" iistyle="main">
        Main Button
      </Button>
      <hr />
      <Button size="small" iistyle="error">
        Error Button
      </Button>
      <hr />
      <Button size="small" iistyle="success">
        Success Button
      </Button>
      <hr />
      <Button size="small" iistyle="instant-tutoring">
        Instant Tutoring
      </Button>
    </div>
  ))
  .add('medium size', () => (
    <div>
      <Button size="medium">Default Button</Button>
      <hr />
      <Button size="medium" iistyle="main">
        Main Button
      </Button>
      <hr />
      <Button size="medium" iistyle="error">
        Error Button
      </Button>
      <hr />
      <Button size="medium" iistyle="success">
        Success Button
      </Button>
      <hr />
      <Button size="medium" iistyle="instant-tutoring">
        Instant Tutoring
      </Button>
    </div>
  ))
  .add('standard size', () => (
    <div>
      <Button size="standard">Default Button</Button>
      <hr />
      <Button size="standard" iistyle="main">
        Main Button
      </Button>
      <hr />
      <Button size="standard" iistyle="error">
        Error Button
      </Button>
      <hr />
      <Button size="standard" iistyle="success">
        Success Button
      </Button>
      <hr />
      <Button size="standard" iistyle="instant-tutoring">
        Instant Tutoring
      </Button>
    </div>
  ))
  .add('big size', () => (
    <div>
      <Button size="big">Default Button</Button>
      <hr />
      <Button size="big" iistyle="main">
        Main Button
      </Button>
      <hr />
      <Button size="big" iistyle="error">
        Error Button
      </Button>
      <hr />
      <Button size="big" iistyle="success">
        Success Button
      </Button>
      <hr />
      <Button size="big" iistyle="instant-tutoring">
        Instant Tutoring
      </Button>
    </div>
  ));

storiesOf('Menu', module)
  .add('Normal', () => (
    <Menu selected={2} search style={{ width: '200px' }}>
      <MenuItem
        value={
          'Lorem ipsum A Lorem ipsum A Lorem ipsum A Lorem ipsum A Lorem ipsum A'
        }
        onClick={action('menu-click')}>
        Lorem ipsum A Lorem ipsum A Lorem ipsum A Lorem ipsum A Lorem ipsum A
      </MenuItem>
      <MenuItem value={'Lorem'}>Lorem ipsum B</MenuItem>
      <MenuItem value={'Lorem ipsum C'}>Lorem ipsum C</MenuItem>
      <MenuItem value={'Lorem ipsum D'}>Lorem ipsum D</MenuItem>
      <MenuItem value={'Lorem ipsum E'}>Lorem ipsum E</MenuItem>
    </Menu>
  ))
  .add('Dropdown group', () => (
    <Menu selected="2G4" placeholder="Choice" search style={{ width: '200px' }}>
      <MenuItem value={'C Lorem ipsum'}>
        <span>
          <img />
        </span>
      </MenuItem>
      <MenuGroup name="Category A">
        <MenuItem value={'A Lorem ipsum'}>A Lorem ipsum</MenuItem>
        <MenuItem value={'Lorem ipsum'}>B Lorem ipsum</MenuItem>
        <MenuItem value={'Lorem ipsum'}>
          <span>
            <img />
          </span>
        </MenuItem>
      </MenuGroup>
      <MenuGroup name="Category B">
        <MenuItem value={'d Lorem ipsum'}>D Lorem ipsum</MenuItem>
        <MenuItem value={'Lorem ipsum'}>Lorem ipsum E</MenuItem>
        <MenuItem value={'Lorem ipsum'}>Lorem ipsum F</MenuItem>
      </MenuGroup>
    </Menu>
  ));

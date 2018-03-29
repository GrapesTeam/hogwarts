import React from 'react';

import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import InputField from '../Common/InputField';
import Button from '../Common/Button';

const firstArgAction = decorateAction([
  args => {
    console.log(args)
    return args.slice(0, 1)
  }
]);

storiesOf('Input', module)
  .add('placeholder text', () => <InputField name="nickname" type="text" placeholder="Enter nickname" />)
  .add('password text', () => <InputField name="nickname" type="password" placeholder="Enter password" />);

storiesOf('Button', module)
  .add('enabled', () => (
    <div>
      <Button onClick={action('button-click', 'ggg')}>Default Button</Button>
      <hr />
      <Button iistyle="main" onClick={ firstArgAction('button-click', 'ggg') }>Main Button</Button>
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
      <Button disabled iistyle="main">Main Button</Button>
      <hr />
      <Button disabled iistyle="error">Error Button</Button>
      <hr />
      <Button disabled iistyle="success">Success Button</Button>
      <hr />
      <Button disabled iistyle="instant-tutoring">Instant Tutoring</Button>
    </div>
  ))
  .add('small size', () => (
    <div>
      <Button size="small">Default Button</Button>
      <hr />
      <Button size="small" iistyle="main">Main Button</Button>
      <hr />
      <Button size="small" iistyle="error">Error Button</Button>
      <hr />
      <Button size="small" iistyle="success">Success Button</Button>
      <hr />
      <Button size="small" iistyle="instant-tutoring">Instant Tutoring</Button>
    </div>
  ))
  .add('medium size', () => (
    <div>
      <Button size="medium">Default Button</Button>
      <hr />
      <Button size="medium" iistyle="main">Main Button</Button>
      <hr />
      <Button size="medium" iistyle="error">Error Button</Button>
      <hr />
      <Button size="medium" iistyle="success">Success Button</Button>
      <hr />
      <Button size="medium" iistyle="instant-tutoring">Instant Tutoring</Button>
    </div>
  ))
  .add('standard size', () => (
    <div>
      <Button size="standard">Default Button</Button>
      <hr />
      <Button size="standard" iistyle="main">Main Button</Button>
      <hr />
      <Button size="standard" iistyle="error">Error Button</Button>
      <hr />
      <Button size="standard" iistyle="success">Success Button</Button>
      <hr />
      <Button size="standard" iistyle="instant-tutoring">Instant Tutoring</Button>
    </div>
  ))
  .add('big size', () => (
    <div>
      <Button size="big">Default Button</Button>
      <hr />
      <Button size="big" iistyle="main">Main Button</Button>
      <hr />
      <Button size="big" iistyle="error">Error Button</Button>
      <hr />
      <Button size="big" iistyle="success">Success Button</Button>
      <hr />
      <Button size="big" iistyle="instant-tutoring">Instant Tutoring</Button>
    </div>
  ))

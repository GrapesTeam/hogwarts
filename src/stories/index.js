import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import InputField from '../Common/InputField';

storiesOf('Input', module)
  .add('placeholder text', () => <InputField name="nickname" type="text" placeholder="Enter nickname" />)
  .add('password text', () => <InputField name="nickname" type="password" placeholder="Enter password" />);

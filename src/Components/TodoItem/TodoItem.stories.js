import React from 'react';
import { storiesOf } from '@storybook/react';

import MasterInput from './MasterInput'

storiesOf('MasterInput', module)
  .add('default', () => (
    <MasterInput
    placeholder="Input task here"
    />
  ));
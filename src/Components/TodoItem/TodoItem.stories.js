import React from 'react';
import { storiesOf } from '@storybook/react';

import TodoItem from './TodoItem'

storiesOf('TodoItem', module)
  .add('default', () => (
    <TodoItem itemText="Get meeting notes" id="meeting"/>
  ));
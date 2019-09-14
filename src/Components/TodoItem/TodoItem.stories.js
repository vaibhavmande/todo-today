import React from 'react';
import { storiesOf } from '@storybook/react';

import TodoItem from './TodoItem'

storiesOf('TodoItem', module)
  .add('default', () => (
    <TodoItem 
      itemText="Incomplete todo item" 
      index={0}
      key="incomplete"
      isComplete={0}
      toggleItemStatus={()=>{}}
    />
  ))
  .add('completed', () => (
    <TodoItem 
      itemText="Completed todo item" 
      index={0}
      key="complete"
      isComplete={1}
      toggleItemStatus={()=>{}}
    />
  ));
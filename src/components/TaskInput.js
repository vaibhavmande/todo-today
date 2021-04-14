import React from 'react'
import { Input } from './elements/Input'

export const TaskInput = ({ tasks, addTask }) => {
  const insertIntoState = (inputValue) => {
    addTask([
      ...tasks,
      {
        name: inputValue.trim(),
        checked: false,
      },
    ])
  }
  const onKeyPress = (event) => {
    const inputValue = event.target.value
    if (event?.key == 'Enter' && inputValue) {
      insertIntoState(inputValue)
      event.target.value = ''
      event.target.focus()
    }
  }

  return <Input onKeyPress={onKeyPress} placeholder="Add task, e.g. Get Milk" />
}

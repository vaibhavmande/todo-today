import React from 'react'
import styled from 'styled-components'
import { Input } from './elements/Input'

export const TaskInput = ({ tasks, addTask }) => {
  const insertIntoState = (inputValue) => {
    addTask([
      ...tasks,
      {
        id: '',
        name: inputValue.trim(),
      },
    ])
  }
  const onKeyPress = (event) => {
    const inputValue = event.target.value
    event?.key == 'Enter' && inputValue && insertIntoState(inputValue)
  }

  return <Input onKeyPress={onKeyPress} />
}

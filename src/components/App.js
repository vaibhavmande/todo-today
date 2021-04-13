import React from 'react'
import styled from 'styled-components'
import TasksContainer from './TasksContainer'
import image from '../../public/images/element.svg'

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right top, #ff9a9e, #fad0c4);
`

export const App = () => (
  <Container>
    <TasksContainer />
  </Container>
)

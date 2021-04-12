import React from 'react'
import styled from 'styled-components'
import TasksContainer from './TasksContainer'

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right top, #d3cce3, #e9e4f0);
`

export const App = () => (
  <Container>
    <TasksContainer />
  </Container>
)

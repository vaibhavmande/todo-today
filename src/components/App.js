import React from 'react'
import styled from 'styled-components'
import TasksContainer from './TasksContainer'
import { FlexContainer } from './containers/FlexContainer'

const Container = styled(FlexContainer)`
  height: 100vh;
  background: linear-gradient(to right top, #ff9a9e, #fad0c4);
`

export const App = () => (
  <Container>
    <TasksContainer />
  </Container>
)

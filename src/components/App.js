import React from 'react'
import styled from 'styled-components'
import TasksContainer from './TasksContainer'
import { FlexContainer } from './containers/FlexContainer'
import { Circle } from './elements/Circle'

const Container = styled(FlexContainer)`
  height: 100vh;
  background: linear-gradient(to right top, #ff9a9e, #fad0c4);
`

export const App = () => (
  <Container>
    <Circle type="top" />
    <Circle />
    <TasksContainer />
  </Container>
)

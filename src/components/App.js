import React from 'react'
import styled from 'styled-components'
import TasksContainer from './TasksContainer'
import { FlexContainer } from './containers/FlexContainer'

const Container = styled(FlexContainer)`
  height: 100vh;
  background: linear-gradient(to right top, #ff9a9e, #fad0c4);
`

const Circle = styled.div`
  height: 5rem;
  width: 5rem;
  position: absolute;
  border-radius: 50%;
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  z-index: 1;

  ${({ type }) =>
    type == 'top'
      ? `
  top: 5%;
  right: 15%;`
      : `
  bottom: 5%;
  left: 10%;
  `}

  @media screen and (max-width: 325px) {
    display: none;
  }
`

export const App = () => (
  <Container>
    <Circle type="top" />
    <Circle />
    <TasksContainer />
  </Container>
)

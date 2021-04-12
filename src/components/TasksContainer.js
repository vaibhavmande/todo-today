import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 60%;
  border-radius: 1.5rem;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
`

const QuoteFooter = styled.div`
  height: 8%;
  width: 100%;
  align-self: flex-end;
  border-radius: 0 0 1.5rem 1.5rem;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.1)
  );
`

const TasksContainer = () => {
  return (
    <Container>
      <QuoteFooter>0 / 5</QuoteFooter>
    </Container>
  )
}

export default TasksContainer

import React, { useState } from 'react'
import styled from 'styled-components'
import { Title } from './elements/Title'
import { Centered } from './containers/Centered'
import { FlexContainer } from './containers/FlexContainer'
import { ImageContainer } from './containers/ImageContainer'
import { TaskInput } from './TaskInput'
import { Tasks } from './Tasks'
import { breakpoints } from '../breakpoints'

const Container = styled(FlexContainer)`
  height: 60%;
  width: 60%;
  border-radius: 1.5rem;
  overflow: hidden;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  @media ${breakpoints.tillTablet} {
    width: 80%;
    height: 80%;
  }
`

const TasksContainer = () => {
  const [tasks, setTasks] = useState([])

  return (
    <Container fd="column">
      <Title></Title>
      <Centered>
        <TaskInput tasks={tasks} addTask={setTasks} />
        {!tasks.length ? (
          <ImageContainer at="flex-start"></ImageContainer>
        ) : (
          <Tasks tasks={tasks} setTasks={setTasks} />
        )}
      </Centered>
    </Container>
  )
}

export default TasksContainer

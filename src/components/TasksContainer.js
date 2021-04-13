import React, { useState } from 'react'
import styled from 'styled-components'
import { Centered } from './containers/Centered'
import { TaskInput } from './TaskInput'
import { Tasks } from './Tasks'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  const [tasks, setTasks] = useState([
    { name: 'Task 1 this is task 1' },
    { name: 'Task 2 task 2' },
  ])

  return (
    <Container>
      <Centered>
        <TaskInput tasks={tasks} addTask={setTasks} />
        <Tasks tasks={tasks} />
      </Centered>
      <QuoteFooter>0 / 5</QuoteFooter>
    </Container>
  )
}

export default TasksContainer

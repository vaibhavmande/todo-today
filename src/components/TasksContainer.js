import React, { useState } from 'react'
import styled from 'styled-components'
import { Title } from './elements/Title'
import { Centered } from './containers/Centered'
import { TaskInput } from './TaskInput'
import { Tasks } from './Tasks'
import image from '../../public/images/done.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 60%;
  border-radius: 1.5rem;
  overflow: hidden;
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

const ImageContainer = styled.div`
  background: url(${image});
  background-size: 250px auto;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  /* background-position-y: 20px; */
`

const TasksContainer = () => {
  const [tasks, setTasks] = useState([])

  return (
    <Container>
      <Title>Tasks for the day</Title>
      <Centered>
        <TaskInput tasks={tasks} addTask={setTasks} />
        {!tasks.length ? (
          <ImageContainer>
            <span style={{ paddingTop: '50px' }}>
              Add a task to get started
            </span>
          </ImageContainer>
        ) : (
          <Tasks tasks={tasks} setTasks={setTasks} />
        )}
      </Centered>
    </Container>
  )
}

export default TasksContainer

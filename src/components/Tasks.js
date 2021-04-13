import React from 'react'
import styled from 'styled-components'
import { Checkbox } from './blocks/Checkbox'
import { FlexContainer } from './containers/FlexContainer'

const ListContainer = styled.div`
  padding: 2px;
  margin-top: 10px;
  overflow: auto;
  flex: 1;
  max-height: 415px;
`

const PaddedText = styled(FlexContainer)`
  padding-left: 10px;
  width: 96%;
  text-decoration: ${({ crossed }) => (crossed ? 'line-through' : 'none')};
`

const PaddedListContainer = styled(FlexContainer)`
  padding: 5px 0;
  margin: 5px 0;
`

export const Tasks = ({ tasks, setTasks }) => {
  const handleCheck = (event, id, setTasks) => {
    const status = event.target.checked
    const newTasks = [...tasks]
    newTasks[id].checked = !!status
    setTasks(newTasks)
  }

  return (
    <ListContainer>
      {tasks.map((task, key) => (
        <PaddedListContainer key={key} hide={task.checked}>
          <Checkbox
            id={key}
            onChange={(event) => handleCheck(event, key, setTasks)}
          />
          <PaddedText at="center" key={key} crossed={task.checked}>
            {task.name}
          </PaddedText>
        </PaddedListContainer>
      ))}
    </ListContainer>
  )
}

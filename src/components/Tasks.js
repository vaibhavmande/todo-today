import React from 'react'
import styled from 'styled-components'
import { Checkbox } from './blocks/Checkbox'
import { FlexContainer } from './containers/FlexContainer'

const ListContainer = styled.div`
  padding: 2px;
  margin-top: 10px;
`

const PaddedText = styled(FlexContainer)`
  padding-left: 10px;
`

const PaddedListContainer = styled(FlexContainer)`
  padding: 5px 0;
  margin: 5px 0;
`

export const Tasks = ({ tasks }) => {
  return (
    <ListContainer>
      {tasks.map((task, key) => (
        <PaddedListContainer>
          <Checkbox id={key} />
          <PaddedText at="center" key={key}>
            {task.name}
          </PaddedText>
        </PaddedListContainer>
      ))}
    </ListContainer>
  )
}

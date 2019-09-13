import React from "react";
import styled from '@emotion/styled'

function TodoItem({itemText, id}) {

  const StyledItem = styled.div`
    border: 2px solid grey;
    padding: 6px;
    margin: 2px;
  `
  const CheckItem = styled.input`
    margin: 8px;
  `
  return (
    <StyledItem>
      <CheckItem type="checkbox" id={id}/>
      <label for={id}>{itemText}</label>
    </StyledItem>
  )
}

export default TodoItem
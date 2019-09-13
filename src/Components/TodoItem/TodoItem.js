import React from "react";
import styled from '@emotion/styled'

function TodoItem({itemText, index, isComplete, toggleItemStatus}) {

  const StyledItem = styled.div`
    display: flex;
    align-items: center;
    border: none;
    margin: 2px;
    width: 100%;
    height: 50px;
  `
  const CheckItem = styled.input`
    margin: 8px;
  `
  const CheckboxLeftContainer = styled.span`
    flex-basis: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: #efe382;
    border-radius: 4px 0 0 4px;
  `
  const CheckboxRightContainer = styled.span`
    flex-basis: 90%;
    display: flex;
    align-items: center;
    height: 100%;
    background: ${props => props.isComplete ? 'green' : '#ff7373'};
    padding-left: 15px;
    border-radius: 0 4px 4px 0;
  `

  return (
    <StyledItem>
      <CheckboxLeftContainer>
        <CheckItem 
          type="checkbox" 
          id={index} 
          defaultChecked={Boolean(isComplete)}
          onClick={toggleItemStatus.bind(this, index)}
        />
      </CheckboxLeftContainer>
      <CheckboxRightContainer isComplete={isComplete}>
        <label htmlFor={index}>{itemText}</label>
      </CheckboxRightContainer>
    </StyledItem>
  )
}

export default TodoItem
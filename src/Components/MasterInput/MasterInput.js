import React, { Component } from "react";
import styled from '@emotion/styled'
import Theme from '../../theme'

const { colors } = Theme

const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  background: ${colors.elements.masterInput};
  border-radius: 4px;
  font-size: 1.2em;
  padding: 2px 12px;
  margin-bottom: 5px;
`

export default class MasterInput extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  onKeyDownHandler = event => {
    const {value} = event.target

    if(event.keyCode === 13 && event.shiftKey === false && value !== "") {
      this.props.setItems(value)
      event.preventDefault();
      this.setState({value: ""})
    }
  };

  onChangeHandler = event => {
    event.preventDefault()
    const {value} = event.target
    this.setState({value})
  }

  render = () => {
   
    return (
      <StyledInput 
        placeholder="Enter task here" 
        onKeyDown={this.onKeyDownHandler}
        onChange={this.onChangeHandler}
        value={this.state.value}
      />
    );
  };
}

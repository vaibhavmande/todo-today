import React, { Component } from "react";
import styled from '@emotion/styled'

export default class MasterInput extends Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  onKeyDownHandler = event => {
    this.setState({
      item: event.target.value
    });
  };

  render = props => {
    
    const StyledInput = styled.input`
      width: 100%;
      height: 35px;
      border: none;
      background: grey;
      border-radius: 4px;
      font-size: 1.2em;
      padding: 2px 12px;
    `
    return (
      <StyledInput placeholder="Enter task here"/>
    );
  };
}

import React, {Component} from "react";
import ReactDOM from "react-dom";
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import MasterInput from "./Components/MasterInput/MasterInput";

const stretchedContainer = css`
  height: 100vh;
  width: 100vw;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${stretchedContainer}
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div className="App">
        <FlexContainer>
          <MasterInput />
        </FlexContainer>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

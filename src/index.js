import React, {Component} from "react";
import ReactDOM from "react-dom";
import styled from '@emotion/styled'
import MasterInput from "./Components/MasterInput/MasterInput";
import TodoItem from "./Components/TodoItem/TodoItem"

import './index.css'

const RootContainer = styled.div`
  height: 100vh;
`

const FlexAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  padding: 15px;
`
class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [
        'Roti',
        'Kapda',
        'Makan'
      ]
    }
  }

  render() {
    return (
      <RootContainer>
        <FlexAppContainer>
          <MasterInput />
          {this.state.items.map(item => 
            <TodoItem itemText={item} id={item} key={item.toString()}/>
          )}
        </FlexAppContainer>
      </RootContainer>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

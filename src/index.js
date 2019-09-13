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
        {
          name: 'Roti',
          isComplete: false
        },
        {
          name: 'Kapda',
          isComplete: true
        }
      ]
    }
  }

  setItems = (item) => {
    this.setState({
      items:[...this.state.items, {
        name: item,
        isComplete: false
      }]
    })
  }

  toggleItemStatus = (index) => {
    if( typeof this.state.items[index] !== "undefined" ) {
      const items = [...this.state.items];
      items[index].isComplete = !items[index].isComplete;
      this.setState({ items });
    }
  }

  render() {
    return (
      <RootContainer>
        <FlexAppContainer>
          <MasterInput setItems={this.setItems}/>
          {this.state.items.map((item, index) => 
            ( index < 5 ) && <TodoItem 
                itemText={item.name} 
                index={index} 
                key={item.name.toLowerCase()}
                isComplete={item.isComplete}
                toggleItemStatus={this.toggleItemStatus}
              />
          )}
        </FlexAppContainer>
      </RootContainer>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

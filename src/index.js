import React, {Component} from "react";
import ReactDOM from "react-dom";
import styled from '@emotion/styled'
import MasterInput from "./Components/MasterInput/MasterInput";
import TodoItem from "./Components/TodoItem/TodoItem"
import './index.css'
import Theme from './theme'

const { colors } = Theme

const RootContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${colors.app.background};
`

const FlexAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 100%;
  width: 50%;
`

const CenteredAppContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 88%;
`

const StatusBar = styled.div`
  height: 2%;
  width: ${props => props.progress}%;
  background-color: ${props => props.progress < 100 ? colors.app.statusbar : colors.tasks.done};
`

const Header = styled.header`
  font-family: "Arial", Helvetica, sans-serif;
  color: honeydew;
  padding: 10px;
  text-align: center;
  background: ${colors.app.header};
  display: flex;
`
const HeaderText = styled.h2`
  margin: 0;
`

const ThirdDiv = styled.div`
  width: calc(100%/3);
  padding: 0;
  margin: 0;
`

const RightAlignedThirdDiv = styled(ThirdDiv)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 12px;
`

const ProfileHyperLink = styled.a`
  width: 5%;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: []
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

  toggleItemStatus = index => {
    if( typeof this.state.items[index] !== "undefined" ) {
      const items = [...this.state.items];
      items[index].isComplete = !items[index].isComplete;
      this.setState({ items });
    }
  }

  /**
   * @todo compute checkedItem in the param, no need to get a an
   * argument to the method
   */
  computeProgress = progress => {
    let progressPercent = 0
    let totalItems = this.state.items.length
    
    totalItems && ( progressPercent = Math.round((progress / totalItems)*100) )
    
    return progressPercent
  }

  render() {
    let progress = 0

    return (
      <RootContainer>
        <Header>
          <ThirdDiv/>
          <ThirdDiv>
            <HeaderText>
              Tasks for the day
            </HeaderText>
          </ThirdDiv>
          <RightAlignedThirdDiv>
            <ProfileHyperLink 
              href="https://github.com/vaibhavmande"
              target="_blank"
            >
              <img src={require("./github.svg")} alt="GitHub"/>
            </ProfileHyperLink>
          </RightAlignedThirdDiv>
        </Header>
        <CenteredAppContainer>
          <FlexAppContainer>
            <MasterInput 
              setItems={this.setItems} 
              totalItems={this.state.items.length}
            />
            {this.state.items.map((item, index) => {
              item.isComplete && progress++
              return <TodoItem 
                  itemText={item.name} 
                  index={index} 
                  key={item.name.toLowerCase()}
                  isComplete={item.isComplete}
                  toggleItemStatus={this.toggleItemStatus}
                />
            })
          }
          </FlexAppContainer>
        </CenteredAppContainer>  
        <StatusBar 
          progress={progress = this.computeProgress(progress)} 
          title={progress}>
        </StatusBar>
      </RootContainer>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

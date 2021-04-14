import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.fd ? 'column' : 'row')};
  align-items: ${(props) => props.at ?? 'center'};
  justify-content: ${(props) => props.jc ?? 'center'};
`

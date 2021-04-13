import styled from 'styled-components'
import image from '../../../public/images/done.svg'

export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 15px 25px;
  margin-top: 10px;
  ${({ bg }) =>
    bg &&
    `
      background: url(${image});
      background-size: 100px auto;
      background-repeat: no-repeat;
      background-position: center;
    `}
`

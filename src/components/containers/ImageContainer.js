import styled from 'styled-components'
import { FlexContainer } from './FlexContainer'
import image from 'url:../../../public/images/done.svg'

export const ImageContainer = styled(FlexContainer)`
  background: url(${image});
  background-size: 250px auto;
  background-repeat: no-repeat;
  background-position: center;
  flex: 1;
`

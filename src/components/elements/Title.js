import styled from 'styled-components'
import { breakpoints } from '../../breakpoints'

export const Title = styled.h1`
  margin-top: 20px;
  align-self: center;
  padding-left: 15px;
  &::before {
    content: 'Tasks for the day';
  }
  @media ${breakpoints.onlySmallMobile} {
    padding-left: 0;
    &::before {
      content: 'Tasks';
    }
  }
`

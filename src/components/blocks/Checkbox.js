import React from 'react'
import styled from 'styled-components'

const Round = styled.div`
  position: relative;
  height: 28px;
  width: 28px;
  input[type='checkbox'] {
    visibility: hidden;
    &:checked {
      & + label {
        background-color: #66bb6a;
        border-color: #66bb6a;
      }
    }
    &:checked {
      & + label {
        &::after {
          opacity: 1;
        }
      }
    }
  }
`

const Label = styled.label`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
  &::after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: '';
    height: 6px;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
  }
`

const Container = styled.div``
export const Checkbox = ({ onChange, id }) => {
  return (
    <Round>
      <input type="checkbox" id={id} onChange={onChange} />
      <Label htmlFor={id}></Label>
    </Round>
  )
}

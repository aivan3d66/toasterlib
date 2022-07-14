import styled from 'styled-components'

export const ButtonContainer = styled.button`
  min-width: 100px;
  margin: auto;
  padding: 10px;
  color: #000000;
  text-align: center;
  font: normal normal normal 18px/22px "Arial", sans-serif;
  border: 1px solid #707070;
  border-radius: 5px;
  background-color: ${({color}) => color};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-color: transparent;
  }

  &:disabled {
    opacity: 0.5;
  }
`

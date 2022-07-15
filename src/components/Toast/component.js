import styled from 'styled-components'
import {keyframes} from 'styled-components'

const transition = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const slideInLeft = keyframes`
  from {
    margin-left: 100%;
  }

  to {
    margin-left: 0;
  }
`
const slideInRight = keyframes`
  from {
    margin-right: 100%;
  }

  to {
    margin-right: 0;
  }
`

export const ToastWrapper = styled.div`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 365px;
  min-height: 50px;
  max-height: 120px;
  margin: 20px 0;
  padding: 20px 30px;
  color: ${({theme}) => theme.textColor};
  background-color: ${({theme}) => theme.backgroundColor};
  border: 1px solid transparent;
  box-shadow: 4px 4px 8px #00000029;
  border-radius: 24px;
  box-sizing: border-box;
  animation-name: ${({color}) => color === 'slideInLeft' ? slideInLeft : color === 'slideInRight' ? slideInRight : transition};
  animation-duration: 1s;
`

export const ToastIcon = styled.div`
  margin: 0 40px 0 0;

  img {
    width: 44px;
    height: auto;
  }
`

export const ToastButton = styled.button`
  margin: 0 0 auto 0;
  color: ${({theme}) => theme.textColor};
  font-size: 26px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

export const ToastInfo = styled.div`
  width: 300px;
  padding: 2px 0;
  margin: 0 auto 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: inherit;
`

export const ToastTitle = styled.p`
  width: 100%;
  padding: 2px 0;
  margin: 10px 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  text-align: left;
`

export const ToastDescription = styled.p`
  width: 100%;
  margin: 10px 0;
  font-weight: normal;
  font-size: 16px;
  text-align: left;
`

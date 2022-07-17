import styled from 'styled-components'
import { keyframes } from 'styled-components'

const transition = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const flip = keyframes`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
`
const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
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
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid transparent;
  box-shadow: 4px 4px 8px #00000029;
  border-radius: 24px;
  box-sizing: border-box;
  animation-name: ${({ color }) => color === 'flip' ? flip : color === 'zoomIn' ? zoomIn : transition};
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
  color: ${({ theme }) => theme.textColor};
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

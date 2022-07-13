import styled from 'styled-components'

export const ToastWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 365px;
  min-height: 50px;
  max-height: 120px;
  padding: 20px 30px;
  color: ${({ colorSchema }) => colorSchema.textColor};
  background-color: ${({ colorSchema }) => colorSchema.backgroundColor};
  border: 1px solid transparent;
  box-shadow: 4px 4px 8px #00000029;
  border-radius: 24px;
  opacity: 1;
  box-sizing: border-box;
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
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 24px;
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

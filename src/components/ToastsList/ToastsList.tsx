import React from 'react'
import { ToastsListWrapper } from './component'
import { ContainerPositionType } from '../../containers/ToastManager/ToastsManager'

const ToastsList: React.FC<IToastListPropsType> = (
  {
    containerPosition,
    toastsList,
  },
) => {
  return (
    <ToastsListWrapper style={containerPosition}>
      {toastsList}
    </ToastsListWrapper>
  )
}

export interface IToastListPropsType {
  containerPosition: ContainerPositionType,
  toastsList: Array<JSX.Element>
}

export default ToastsList

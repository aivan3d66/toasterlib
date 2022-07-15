import React from 'react'
import { ToastsListWrapper } from './component'
import { ContainerPositionType } from '../../containers/ToastsManager'

export const ToastsList: React.FC<IToastListPropsType> = (
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

import { ContainerPositionType } from '@/containers/ToastManager'
import React from 'react'
import { ToastsListWrapper } from './component'

export const ToastList: React.FC<IToastListPropsType> = (
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

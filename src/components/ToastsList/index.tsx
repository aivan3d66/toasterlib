import React from 'react'
import { ToastsListWrapper } from './component'
import { ToastContainerPositionType } from '@/types'
import { getContainerPosition } from '@/helpers/getContainerPosition'

export const ToastList: React.FC<IToastListPropsType> = (
  {
    containerPosition,
    children,
  },
) => {
  const position = getContainerPosition(containerPosition)

  return (
    <ToastsListWrapper style={position}>
      {children}
    </ToastsListWrapper>
  )
}

export interface IToastListPropsType {
  containerPosition: ToastContainerPositionType,
  children?: React.ReactNode
}

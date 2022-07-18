import React from 'react'
import { ToastsListWrapper } from './component'
import { PositionValuesType } from '@/types'

export const ToastList: React.FC<IToastListPropsType> = (
  {
    containerPosition,
    children,
  },
) => {
  return (
    <ToastsListWrapper style={containerPosition}>
      {children}
    </ToastsListWrapper>
  )
}

export interface IToastListPropsType {
  containerPosition: PositionValuesType,
  children?: React.ReactNode
}

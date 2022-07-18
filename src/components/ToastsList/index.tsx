import React from 'react'
import { ToastsListWrapper } from './component'
import { ToastContainerPositionType } from '@/types'
import { getContainerPosition } from '@/helpers/getContainerPosition'
import { ErrorBoundary } from '../ErrorBoundary'

export const ToastList: React.FC<IToastListPropsType> = (
  {
    containerPosition,
    children,
  },
) => {
  const position = getContainerPosition(containerPosition)

  return (
    <ToastsListWrapper style={position}>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </ToastsListWrapper>
  )
}

export interface IToastListPropsType {
  containerPosition: ToastContainerPositionType,
  children?: React.ReactNode
}

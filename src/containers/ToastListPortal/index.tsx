import ReactDOM from 'react-dom'
import React, { useMemo } from 'react'
import { ToastList } from '@/components/ToastsList'
import { IToastPropsType, Toast } from '@/components/Toast'
import { useShowToast } from '@/components/ToastProvider'
import { usePortal } from '@/hooks/usePortal'
import { ToastAnimationType, ToastContainerPositionType } from '@/types'

export const ToastListPortal: React.FC<ToastPortalPropsType> = React.memo((
  {
    position,
    animation,
    toasts
  },
) => {
  const { removeToast } = useShowToast()
  const { isLoad, portalContainer } = usePortal()
  const visibleToasts: Array<IToastPropsType> = useMemo(() => toasts.slice(0, 3), [toasts])

  return isLoad
    ? ReactDOM.createPortal(
      <ToastList containerPosition={position}>
        {
          visibleToasts.map(({ status, id, description, title, duration }) => {
              const deleteToastHandler = () => removeToast(id)
              return (
                <Toast
                  key={id}
                  id={id}
                  status={status}
                  description={description}
                  title={title}
                  animation={animation}
                  removeToast={deleteToastHandler}
                  duration={duration}
                />
              )
            },
          )
        }
      </ToastList>,
      document.getElementById(portalContainer) as any,
    )
    : null
})

type ToastPortalPropsType = {
  position: ToastContainerPositionType,
  animation: ToastAnimationType,
  toasts: Array<IToastPropsType>
}

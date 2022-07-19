import React, { useEffect } from 'react'
import {
  ToastButton,
  ToastDescription,
  ToastIconWrapper,
  ToastInfo,
  ToastTitle,
  ToastWrapper,
} from './component'
import DEFAULT_TOASTS from '@/constants/constants'
import { ToastAnimationType, ToastStatusType } from '@/types'
import { ToastIcon } from './ToastIcon'
import IconClose from '@/assets/svg/iconClose.svg'


export const Toast: React.FC<IToastPropsType> = (
  {
    animation,
    status,
    toastColor,
    toastMargins,
    removeToast,
    description,
    title,
    duration = 0,
  },
) => {
  useEffect(() => {
    if (!duration) return

    const timer = setTimeout(() => {
      removeToast()
    }, duration)

    return () => clearTimeout(timer)
  }, [removeToast, duration])

  const currentToastProperties =
    status === 'err'
      ? DEFAULT_TOASTS.error
      : status === 'warn'
        ? DEFAULT_TOASTS.warning
        : status === 'info'
          ? DEFAULT_TOASTS.inform
          : DEFAULT_TOASTS.success

  const currentAnimation = animation ? animation : 'transition'
  const currentToastStyles = {
    margin: `${toastMargins}`,
    backgroundColor: `${toastColor}`,
  }

  return (
    <ToastWrapper
      theme={currentToastProperties}
      color={currentAnimation}
      style={currentToastStyles}
    >
      <ToastIconWrapper>
        <ToastIcon icon={currentToastProperties.icon}/>
      </ToastIconWrapper>
      <ToastInfo>
        <ToastTitle>{title ? title : currentToastProperties.title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
      </ToastInfo>
      <ToastButton onClick={removeToast} theme={currentToastProperties}>
        <IconClose />
      </ToastButton>
    </ToastWrapper>
  )
}

export interface IToastPropsType {
  id?: string;
  status?: ToastStatusType
  title?: string;
  description?: string;
  toastMargins?: string,
  toastColor?: string,
  animation?: ToastAnimationType,
  duration?: number;
  removeToast: () => void;
}

import React, { useEffect } from 'react'
import { ToastButton, ToastDescription, ToastIcon, ToastInfo, ToastTitle, ToastWrapper } from './component'
import { VscChromeClose } from 'react-icons/vsc'
import DEFAULT_TOASTS from '@/constants/constants'
import { ToastAnimationType, ToastStatusType } from '@/containers/ToastManager'

export const Toast: React.FC<IToastPropsType> = (
  {
    animation,
    status,
    toastColor,
    toastMargins,
    deleteToast,
    description,
    title,
    duration = 0,
  },
) => {
  useEffect(() => {
    if (!duration) return

    const timer = setTimeout(() => {
      deleteToast()
    }, duration)

    return () => clearTimeout(timer)
  }, [deleteToast, duration])

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
      <ToastIcon>
        <img src={currentToastProperties.icon} alt='current toast icon' />
      </ToastIcon>
      <ToastInfo>
        <ToastTitle>{title ? title : currentToastProperties.title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
      </ToastInfo>
      <ToastButton onClick={deleteToast} theme={currentToastProperties}>
        <VscChromeClose />
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
  deleteToast: () => void;
}

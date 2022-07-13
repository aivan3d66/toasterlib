import React from 'react'
import { ToastButton, ToastDescription, ToastIcon, ToastInfo, ToastTitle, ToastWrapper } from './component'
import iconClose from './../../assets/svg/iconClose.svg'
import iconWarning from './../../assets/svg/iconWarning.svg'
import iconSuccess from './../../assets/svg/iconSuccess.svg'
import iconInfo from './../../assets/svg/iconInfo.svg'
import iconError from './../../assets/svg/iconError.svg'

export const colors = {
  success: {
    textColor: '#ffffff',
    backgroundColor: '#37E29A',
  },
  warning: {
    textColor: '#000000',
    backgroundColor: '#F4E048',
  },
  inform: {
    textColor: '#ffffff',
    backgroundColor: '#9A40D3',
  },
  error: {
    textColor: '#ffffff',
    backgroundColor: '#E25837',
  },
  // green: '#37E29A',
  // red: '#E25837',
  // purple: '#9A40D3',
  // yellow: '#F4E048',
}

export const Toast: React.FC<IToastPropsType> = (
  {
    // toastId,
    status,
    title,
    description,
    // toastColor,
    // toastPosition,
    // toastMargins,
    // timeout,
    // animation,
    // deleteToast,
  },
) => {
  const colorSchema = status === 'err' ? colors.error : status === 'warn' ? colors.warning : status === 'info' ? colors.inform : colors.success
  const currentIcon = status === 'err' ? iconError : status === 'warn' ? iconWarning : status === 'info' ? iconInfo : iconSuccess

  const onCLoseBtnHandler = () => {
    // deleteToast(toastId)
  }

  return (
    <ToastWrapper colorSchema={colorSchema}>
      <ToastIcon>
        <img src={currentIcon} alt='current toast icon' />
      </ToastIcon>
      <ToastInfo>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastInfo>
      <ToastButton onClick={onCLoseBtnHandler}>
        <img src={iconClose} alt='close icon' />
      </ToastButton>
    </ToastWrapper>
  )
}

type ToastStatusType = 'ok' | 'warn' | 'info' | 'err'
type ToastPositionType = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'
type ToastAnimation = 'default' | 'transition' | 'roll'

export interface IToastPropsType {
  toastId: string,
  status?: ToastStatusType,
  title?: string,
  description?: string,
  toastColor?: string,
  toastPosition?: ToastPositionType,
  toastMargins?: string,
  timeout?: number,
  animation?: ToastAnimation
}

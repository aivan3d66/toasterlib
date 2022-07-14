import React from 'react'
import { ToastButton, ToastDescription, ToastIcon, ToastInfo, ToastTitle, ToastWrapper } from './component'
import iconWarning from './../../assets/svg/iconWarning.svg'
import iconSuccess from './../../assets/svg/iconSuccess.svg'
import iconInfo from './../../assets/svg/iconInfo.svg'
import iconError from './../../assets/svg/iconError.svg'
import { VscChromeClose } from 'react-icons/vsc'

export const TOAST_PROPERTIES = {
  success: {
    title: 'Success',
    description: 'This is a success toast component',
    textColor: '#ffffff',
    backgroundColor: '#37E29A',
    icon: iconSuccess,
  },
  warning: {
    title: 'Warning',
    description: 'This is a warning toast component',
    textColor: '#000000',
    backgroundColor: '#F4E048',
    icon: iconWarning,
  },
  inform: {
    title: 'Info',
    description: 'This is an info toast component',
    textColor: '#ffffff',
    backgroundColor: '#9A40D3',
    icon: iconInfo,
  },
  error: {
    title: 'Danger',
    description: 'This is an error toast component',
    textColor: '#ffffff',
    backgroundColor: '#E25837',
    icon: iconError,
  },
  // green: '#37E29A',
  // red: '#E25837',
  // purple: '#9A40D3',
  // yellow: '#F4E048',
}

// export const statusValue = {
//   success: {
//     title: 'Success',
//     description: 'This is a success toast component',
//   },
//   warning: {
//     title: 'Warning',
//     description: 'This is a warning toast component',
//   },
//   inform: {
//     title: 'Info',
//     description: 'This is an info toast component',
//   },
//   error: {
//     title: 'Danger',
//     description: 'This is an error toast component',
//   },
// }

export const Toast: React.FC<IToastPropsType> = (
  {
    toastId,
    status,
    title,
    description,
    // toastColor,
    // toastPosition,
    // toastMargins,
    // timeout,
    // animation,
    deleteToast,
  },
) => {
  const currentToastProperties = status === 'err' ? TOAST_PROPERTIES.error : status === 'warn' ? TOAST_PROPERTIES.warning : status === 'info' ? TOAST_PROPERTIES.inform : TOAST_PROPERTIES.success

  const onCLoseBtnHandler = () => deleteToast(toastId)

  return (
    <ToastWrapper theme={currentToastProperties}>
      <ToastIcon>
        <img src={currentToastProperties.icon} alt='current toast icon' />
      </ToastIcon>
      <ToastInfo>
        <ToastTitle>{title ? title : currentToastProperties.title}</ToastTitle>
        <ToastDescription>{description ? description : currentToastProperties.description}</ToastDescription>
      </ToastInfo>
      <ToastButton onClick={onCLoseBtnHandler} theme={currentToastProperties}>
        <VscChromeClose />
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
  animation?: ToastAnimation,
  deleteToast: (toastId: string) => void
}

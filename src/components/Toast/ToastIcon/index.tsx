import React from 'react'

export const ToastIcon: React.FC<ToastIconPropsType> = ({ icon }) => {
  const Icon = icon
  return <Icon />
}

type ToastIconPropsType = {
  icon: any
}

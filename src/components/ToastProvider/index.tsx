import React, { ContextType, useContext, useMemo } from 'react'
import { useToasts } from '@/hooks/useToast'
import { IToastPropsType } from '@/components/Toast'

interface IToastContext {
  showToast: Function,
  toasts: Array<IToastPropsType>,
  removeToast: (toastId: string) => void,
}

export const ToastContext = React.createContext<ContextType<any>>(() => {
})

export const ToastProvider: React.FC<ToastProviderPropsType> = ({ children }) => {
  const { showToast, toasts, removeToast }: IToastContext = useToasts()

  const values = useMemo(
    () => ({
      showToast,
      toasts,
      removeToast,
    }),
    [toasts],
  )
  return (
    <ToastContext.Provider value={values}>
      {children}
    </ToastContext.Provider>
  )
}

export const useShowToast = () => useContext(ToastContext)

type ToastProviderPropsType = {
  children: React.ReactNode
}

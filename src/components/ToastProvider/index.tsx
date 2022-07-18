import React, { useContext, useMemo } from 'react'
import { useToasts } from '@/hooks/useToast'

export const ToastContext = React.createContext<any>(() => {
})

export const ToastProvider: React.FC<ToastProviderPropsType> = ({ children }) => {
  const { showToast, toasts, removeToast } = useToasts()

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

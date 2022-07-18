import { IToastPropsType } from '@/components/Toast'
import { ToastStatusType } from '@/types'
import { useState } from 'react'
// @ts-ignore
import { v4 as uuidv4 } from 'uuid'

export const useToasts = (): UseToastReturnType => {
  const [toasts, setToasts] = useState<Array<IToastPropsType>>([])

  const showToast = (
    {
      description,
      title,
      status,
      duration = 3,
    }: ShowToastArgsType,
  ): any => {
    const setToastId = uuidv4()

    setToasts((currentState: any) => [
      ...currentState,
      {
        description,
        title,
        status,
        duration,
        id: setToastId,
      },
    ])
  }

  const removeToast = (toastId: string) => {
    setToasts((currentState) => currentState.filter((t: IToastPropsType) => t.id !== toastId))
  }

  return { toasts, showToast, removeToast }
}

type ShowToastArgsType = {
  description?: string,
  title?: string,
  status: ToastStatusType,
  duration?: number
}
type UseToastReturnType = {
  toasts: Array<IToastPropsType>,
  showToast: (
    {
      description,
      title,
      status,
      duration,
    }: ShowToastArgsType) => IToastPropsType,
  removeToast: (toastId: string) => void
}

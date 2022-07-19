import { IToastPropsType } from '@/components/Toast'
import { ToastStatusType } from '@/types'
import { SetStateAction, useState } from 'react'
// @ts-ignore
import { v4 as uuidv4 } from 'uuid'

export const useToasts = () => {
  const [toasts, setToasts] = useState<Array<IToastPropsType>>([])

  const showToast = ({ description, title, status, duration }: IToastPropsType): void => {
    const setToastId: string = uuidv4()

    setToasts((currentState: SetStateAction<Array<IToastPropsType>>) => [
      ...currentState as any,
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

  return { toasts, showToast, removeToast } as UseToastReturnType
}

type ShowToastArgsType = {
  description?: string,
  title?: string,
  status: ToastStatusType,
  duration?: number
}
export type UseToastReturnType = {
  toasts: Array<IToastPropsType>,
  showToast: (
    {
      description,
      title,
      status,
      duration,
    }: ShowToastArgsType) => IToastPropsType,
  removeToast: (toastId: string) => void,
}

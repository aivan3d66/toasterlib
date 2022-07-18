import IconSuccess from '@/assets/svg/iconSuccess.svg'
import IconWarning from '@/assets/svg/iconWarning.svg'
import IconInfo from '@/assets/svg/iconInfo.svg'
import IconError from '@/assets/svg/iconError.svg'

export const DEFAULT_TOASTS = {
  success: {
    title: 'Success',
    textColor: '#ffffff',
    backgroundColor: '#37E29A',
    icon: IconSuccess,
  },
  warning: {
    title: 'Warning',
    textColor: '#000000',
    backgroundColor: '#F4E048',
    icon: IconWarning,
  },
  inform: {
    title: 'Info',
    textColor: '#ffffff',
    backgroundColor: '#9A40D3',
    icon: IconInfo,
  },
  error: {
    title: 'Danger',
    textColor: '#ffffff',
    backgroundColor: '#E25837',
    icon: IconError,
  },
} as ToastPropertiesType

type DefaultToastType = {
  title: string,
  textColor: string,
  backgroundColor: string,
  icon: any,
}
type ToastPropertiesType = {
  success: DefaultToastType,
  warning: DefaultToastType,
  inform: DefaultToastType,
  error: DefaultToastType
}

export default DEFAULT_TOASTS

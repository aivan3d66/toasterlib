import iconSuccess from '../assets/svg/iconSuccess.svg'
import iconWarning from '../assets/svg/iconWarning.svg'
import iconInfo from '../assets/svg/iconInfo.svg'
import iconError from '../assets/svg/iconError.svg'

export const DEFAULT_TOASTS = {
  success: {
    title: 'Success',
    textColor: '#ffffff',
    backgroundColor: '#37E29A',
    icon: iconSuccess,
  },
  warning: {
    title: 'Warning',
    textColor: '#000000',
    backgroundColor: '#F4E048',
    icon: iconWarning,
  },
  inform: {
    title: 'Info',
    textColor: '#ffffff',
    backgroundColor: '#9A40D3',
    icon: iconInfo,
  },
  error: {
    title: 'Danger',
    textColor: '#ffffff',
    backgroundColor: '#E25837',
    icon: iconError,
  },
} as ToastPropertiesType

type DefaultToastType = {
  title: string,
  textColor: string,
  backgroundColor: string,
  icon: string,
}
type ToastPropertiesType = {
  success: DefaultToastType,
  warning: DefaultToastType,
  inform: DefaultToastType,
  error: DefaultToastType
}

export default DEFAULT_TOASTS

import ErrorBoundary from './components/ErrorBoundary'
import { Toast, IToastPropsType } from './components/Toast'
import { ToastManager, ContainerPositionType, ToastAnimationType, ToastPositionType } from './containers/ToastsManager'
import { IToastListPropsType } from './components/ToastsList'
import { ToastsListContainer } from './containers/ToastsListContainer'

import { DEFAULT_TOASTS } from './constants/constants'

import iconSuccess from '../assets/svg/iconSuccess.svg'
import iconWarning from '../assets/svg/iconWarning.svg'
import iconInfo from '../assets/svg/iconInfo.svg'
import iconError from '../assets/svg/iconError.svg'


export { Toast, IToastPropsType }
export { ToastManager, ToastPositionType, ToastAnimationType, ContainerPositionType }
export { ErrorBoundary }
export { IToastListPropsType }
export { ToastsListContainer }

export { DEFAULT_TOASTS }

export { iconSuccess, iconWarning, iconInfo, iconError }

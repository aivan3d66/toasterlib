import { PositionValuesType, ToastContainerPositionType } from '@/types'

export const getContainerPosition = (position: ToastContainerPositionType): PositionValuesType => {
  switch (position) {
    case 'top-left':
      return {
        top: '0',
        left: '0',
      }
    case 'top-right':
      return {
        top: '0',
        right: '0',
      }

    case 'bottom-left':
      return {
        bottom: '0',
        left: '0',
      }

    case 'bottom-right':
    default:
      return {
        bottom: '0',
        right: '0',
      }
  }
}

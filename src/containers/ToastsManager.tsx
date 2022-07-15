import React from 'react'
import ReactDOM from 'react-dom'
import { v4 as uuidv4 } from 'uuid'
import Toast, { IToastPropsType } from '../components/Toast'

import ErrorBoundary from '../components/ErrorBoundary'
import ToastsListContainer from './ToastsListContainer'
import ToastsList from '../components/ToastsList'

export class ToastManager {
  private readonly containerRef: HTMLElement | null
  private toasts: Array<IToastPropsType> = []
  public containerPosition: ContainerPositionType

  constructor() {
    this.containerRef = document.getElementById('app-root')
    this.containerPosition = {
      bottom: '0',
      right: '0',
    }
  }

  public show(options: ToastOptions): void {
    const toastId = uuidv4()

    const toast: IToastPropsType = {
      id: toastId,
      ...options,
      deleteToast: () => this.delete(options.id ?? toastId),
    }

    this.toasts = [toast, ...this.toasts]
    this.render()
  }

  public delete(toastId: string): void {
    this.toasts = this.toasts.filter(({ id }) => id !== toastId)
    this.render()
  }

  public positionChange(value: ToastPositionType): ContainerPositionType {
    switch (value) {
      case 'top-left':
        return this.containerPosition = {
          top: '0',
          left: '0',
        }
      case 'top-right':
        return this.containerPosition = {
          top: '0',
          right: '0',
        }

      case 'bottom-left':
        return this.containerPosition = {
          bottom: '0',
          left: '0',
        }

      case 'bottom-right':
      default:
        return this.containerPosition = {
          bottom: '0',
          right: '0',
        }
    }
  }

  private render(): void {
    const toastsList = this.toasts.slice(0, 3).map(({ id, ...options }) => (
      <Toast key={id} {...options} />
    ))

    ReactDOM.render(
      <ToastsListContainer>
        <ErrorBoundary>
          <ToastsList
            toastsList={toastsList}
            containerPosition={this.containerPosition}
          />
        </ErrorBoundary>
      </ToastsListContainer>,
      this.containerRef,
    )
  }
}

export type ToastStatusType = 'ok' | 'warn' | 'info' | 'err'
export type ToastPositionType = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'
export type ToastAnimationType = 'transition' | 'flip' | 'zoomIn'
export type ContainerPositionType = {
  top?: string,
  right?: string
  bottom?: string,
  left?: string,
}

interface ToastOptions {
  toastPosition?: ToastPositionType,
  toastMargins?: string,
  animation?: ToastAnimationType,
  id?: string,
  status?: ToastStatusType,
  title?: string,
  description?: string,
  duration?: number,
  toastColor?: string,
}

export default ToastManager

import { Component, ErrorInfo, ReactNode } from 'react'
import ToastManager from '../../containers/ToastsManager'

const toast = new ToastManager()

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: '',
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
    this.setState({
      errorMessage: errorInfo.componentStack
    })
  }

  public render() {
    if (this.state.hasError) {
      toast.show({
        title: 'Error was founded',
        status: 'err',
        description: this.state.errorMessage,
      })
    }

    return this.props.children
  }
}

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  errorMessage?: string
}

export default ErrorBoundary

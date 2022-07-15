import React from 'react'
import { Component, ErrorInfo, ReactNode } from 'react'
import { ErrorMessage } from './component'

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: '',
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: error.message }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorMessage>Sorry.. there was an error</ErrorMessage>
    }

    return this.props.children
  }
}

interface Props {
  children?: ReactNode
}

interface State {
  hasError: Object
}

export default ErrorBoundary

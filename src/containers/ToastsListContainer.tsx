import ReactDOM from 'react-dom'
import React from 'react'

const body = document.getElementById('modal-root') as HTMLElement;

export class ToastsListContainer extends React.Component<{children?: React.ReactNode}> {
  container: HTMLElement = document.createElement("div")

  componentDidMount() {
    body.appendChild(this.container)
  }

  componentWillUnmount() {
    body.removeChild(this.container)
  }

  render() {
    return (
      ReactDOM.createPortal(
        this.props.children,
        this.container,
      )
    )
  }
}


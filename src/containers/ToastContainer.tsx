import ReactDOM from "react-dom";
import React from "react";
import { IToastPropsType } from '../components/Toast'

const body = document.getElementsByTagName('body')[0] as HTMLBodyElement

export class ToastsListContainer extends React.Component<any, ToastsListContainerType>{
  container: HTMLDivElement

  constructor(container: HTMLDivElement) {
    super(container)
    const toastContainer = document.createElement('div') as HTMLDivElement
    toastContainer.id = 'toast-container'
    body.insertAdjacentElement('beforeend', toastContainer)
    this.container = toastContainer
  }

  componentDidMount() {
    body.appendChild(this.container);
  }

  componentWillUnmount() {
    body.removeChild(this.container);
  }

  render() {
    return (
      ReactDOM.createPortal(
        this.props.children,
        this.container
      )
    )
  }
}

type ToastsListContainerType = {
  containerRef: HTMLDivElement
  toastList: Array<IToastPropsType>
}

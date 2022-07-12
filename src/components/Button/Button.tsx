import * as React from 'react'

export type ButtonPropsType = {
  label: string
}

export const Button = (props: ButtonPropsType) => {
  return <button>{props.label}</button>
}

export default Button

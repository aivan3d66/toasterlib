import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonPropsType = DefaultButtonPropsType & {}

const Button: React.FC<ButtonPropsType> = (
  {
    className,
    ...restProps
  },
) => {
  return (
    <button
      {...restProps}
    />
  )
}

export default Button

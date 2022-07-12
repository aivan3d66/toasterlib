import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import Button from './../Button/component'

const colors = {
  green: '#37E29A',
  red: '#E25837',
  purple: '#9A40D3',
  yellow: '#F4E048',
}

export default ({ name, status = 'ok', ...restProps }: ButtonPropsType) => {
  const schema = status === 'err' ? colors.red : status === 'warn' ? colors.yellow : status === 'info' ? colors.purple : colors.green

  return (
    <Button schema={schema} {...restProps}>
      {name}
    </Button>
  )
}

type BtnStatusType = 'ok' | 'warn' | 'info' | 'err'
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export type ButtonPropsType = DefaultButtonPropsType & {
  name?: string,
  status?: BtnStatusType,
}

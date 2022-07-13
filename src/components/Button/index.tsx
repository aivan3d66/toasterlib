import React from 'react'
import { ButtonContainer } from './component'

const colors = {
  green: '#37E29A',
  red: '#E25837',
  purple: '#9A40D3',
  yellow: '#F4E048',
}

export const Button: React.FC<IButtonPropsType> = ({ name, status = 'ok', ...restProps }) => {
  const schema = status === 'err' ? colors.red : status === 'warn' ? colors.yellow : status === 'info' ? colors.purple : colors.green

  return (
    <ButtonContainer color={schema} {...restProps}>
      {name}
    </ButtonContainer>
  )
}

type BtnStatusType = 'ok' | 'warn' | 'info' | 'err'

export interface IButtonPropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string,
  status?: BtnStatusType,
}

import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Toast } from '../components/Toast'

export default {
  title: 'Project/Components/Toast',
  component: Toast,
  argTypes: {
    toastId: {
      title: 'Toast ID',
      description: 'Toast ID',
    },
    title: {
      title: 'Toast name',
      description: 'Toast name',
    },
    description: {
      title: 'Toast text',
      description: 'Toast text',
    },
    toastColor: {
      title: 'Toast background color',
      description: 'Toast background color',
    },
    toastPosition: {
      title: 'Toast position',
      description: 'Toast position',
    },
    toastMargins: {
      title: 'Toast margins',
      description: 'Toast margins',
    },
    timeout: {
      title: 'Toast timeout',
      description: 'Toast timeout',
    },
    animation: {
      title: 'Toast animation',
      description: 'Toast animation',
    },
  },
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args}/>

export const ToastExample = Template.bind({})
ToastExample.args = {
  toastId: '1',
  status: 'ok',
  title: 'Title',
  description: 'Description',
  animation: 'default',
  timeout: 5000,
  toastMargins: '20px',
  toastColor: '#37E29A',
  toastPosition: 'bottom-left',
}

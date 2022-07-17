import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Toast } from '@/components/Toast'

export default {
  title: 'Project/Components/Index',
  component: Toast,
  argTypes: {
    id: {
      title: 'Index ID',
      description: 'Index ID',
    },
    title: {
      title: 'Index title',
      description: 'Index title',
    },
    description: {
      title: 'Index description',
      description: 'Index description',
    },
    toastColor: {
      title: 'Index background color',
      description: 'Index background color',
    },
    toastMargins: {
      title: 'Index margins',
      description: 'Index margins',
    },
    animation: {
      title: 'Index animation',
      description: 'Index animation',
    },
  },
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args}/>

export const ToastExample = Template.bind({})
ToastExample.args = {
  id: '1',
  status: 'ok',
  description: 'Some description',
  animation: 'transition',
  deleteToast: action('Delete btn click!')
}

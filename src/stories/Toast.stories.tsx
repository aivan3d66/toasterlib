import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Toast } from '@/components/Toast'

export default {
  title: 'Project/Components/Toast',
  component: Toast,
  argTypes: {
    id: {
      title: 'Toast ID',
      description: 'Index ID',
    },
    title: {
      title: 'Toast title',
      description: 'Index title',
    },
    description: {
      title: 'Toast description',
      description: 'Index description',
    },
    toastColor: {
      title: 'Toast background color',
      description: 'Index background color',
    },
    toastMargins: {
      title: 'Toast margins',
      description: 'Index margins',
    },
    animation: {
      title: 'Toast animation',
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

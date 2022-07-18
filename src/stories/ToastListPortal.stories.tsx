import React from 'react'
import { ToastListPortal } from '@/containers/ToastListPortal'
import { ToastProvider, useShowToast } from '@/components/ToastProvider'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Project/Components/ToastPortal',
  component: ToastListPortal,
} as ComponentMeta<typeof ToastListPortal>

const Template: ComponentStory<typeof ToastListPortal> = (args) => {
  const { showToast, toasts, removeToast } = useShowToast()

  return (
    <ToastProvider>
      <ToastListPortal position={'bottom-left'} animation={'flip'}/>
      <button
        type='button'
        onClick={() => showToast({
          status: 'ok',
          message: `Operation successful`,
        })}
      >
        add Toast
      </button>
    </ToastProvider>
  )
}
export const ToastListPortalExample = Template.bind({})
ToastListPortalExample.args = {
}

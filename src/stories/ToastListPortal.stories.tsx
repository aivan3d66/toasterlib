import React from 'react'
import { ToastListPortal, ToastPortalPropsType } from '@/containers/ToastListPortal'
import { ToastProvider, useShowToast } from '@/components/ToastProvider'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Project/Components/ToastPortal',
  component: ToastListPortal,
  argTypes: {
    position: {
      title: 'Container position',
      description: 'Container position',
    },
    animation: {
      title: 'Toast animation',
      description: 'Toast animation',
    },
    toasts: {
      title: 'Toasts list',
      description: 'Toasts list',
    },
  },
} as ComponentMeta<typeof ToastListPortal>

const ToastList: React.FC<ToastPortalPropsType> = (args) => {
  const { showToast, toasts } = useShowToast()
  const showToastHandler = () => {
    showToast({
      status: 'ok',
      description: `Operation successful`,
      duration: 10000,
    })
  }

  return (
    <>
      <ToastListPortal
        position={args.position}
        animation={args.animation}
        toasts={toasts}
      />
      <button
        type='button'
        onClick={showToastHandler}
        style={{
          width: '100px',
          padding: '10px',
          color: '#ffffff',
          backgroundColor: '#37E29A',
          border: '1px solid transparent',
          boxShadow: '4px 4px 8px #00000029',
          cursor: 'pointer',
        }}
      >
        Show Toast
      </button>
    </>
  )
}

const Template: ComponentStory<typeof ToastList> = (args) => (
  <ToastProvider>
    <ToastList {...args} />
  </ToastProvider>
)

export const ToastListPortalExample = Template.bind({})
ToastListPortalExample.args = {
  position: 'bottom-left',
  animation: 'flip',
}



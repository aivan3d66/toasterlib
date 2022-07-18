import React from 'react'
import { ToastListPortal } from '@/containers/ToastListPortal'
import { ToastProvider, useShowToast } from '@/components/ToastProvider'
import { ComponentMeta } from '@storybook/react'

export default {
  title: 'Project/Components/ToastPortal',
  component: ToastListPortal,
  argTypes: {
    position: {
      title: 'Container position',
      description: 'Container position',
      defaultValue: 'top-right'
    },
    animation: {
      title: 'Toast animation',
      description: 'Toast animation',
    },
    toasts: {
      title: 'Toasts list',
      description: 'Toast animation',
    }
  }
} as ComponentMeta<typeof ToastListPortal>

const ToastList = () => {
  const { showToast, toasts } = useShowToast();
  const showToastHandler = () => {
    showToast({
      status: 'ok',
      description: `Operation successful`,
      duration: 10000
    })
  }

  return (
    <>
      <ToastListPortal position={'top-right'} animation={'flip'} toasts={toasts}/>
      <button
        type='button'
        onClick={showToastHandler}
      >
        add Toast
      </button>
    </>
  );
};

export const ToastListPortalExample = () => (
  <ToastProvider>
      <ToastList />
  </ToastProvider>
);
ToastListPortalExample.args = {
  position: 'top-right',
  animation: 'flip'
};



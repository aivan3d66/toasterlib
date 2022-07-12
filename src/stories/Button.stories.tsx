import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../components/Button'

export default {
  title: 'Project/Components/Index',
  component: Button,
  argTypes: {
    name: {
      title: 'Btn name',
      description: 'Btn name',
    },
    status: {
      title: 'Status value',
      description: 'Status value',
      defaultValue: 'ok'
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Click!</Button>

export const ButtonExample = Template.bind({})
ButtonExample.args = {
  name: 'Click!',
  status: 'ok',
  onClick: action('Index was clicked'),
}

import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Project/Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Click!</Button>

export const ButtonExample = Template.bind({})
ButtonExample.args = {
  onClick: action('Button was clicked'),
}

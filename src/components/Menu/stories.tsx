import { Meta } from '@storybook/react'
import { Menu, props } from '.'
import { Settings } from './mockSettings'

const stories = {
  title: 'Menu',
  component: Menu,
  args: {
    settings: Settings.data,
  },
} as Meta<props>

export default stories

export const MenuD = (args: props) => <Menu {...args} />

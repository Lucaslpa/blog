import { Meta } from '@storybook/react'
import { Home, props } from './index'
import { Post, Settings } from './postMock'

const stories = {
  title: 'Home',
  component: Home,
  args: {
    posts: [Post, Post, Post, Post, Post, Post],
    settings: Settings.data,
  },
} as Meta<props>

export default stories

export const HomeD = (args: props) => <Home {...args} />

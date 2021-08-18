import { Meta } from '@storybook/react'
import { Main, props } from '.'
import { Posts } from './PostsMock'

const stories = {
  title: 'Main',
  component: Main,
  args: {
    posts: Posts,
  },
} as Meta<props>

export default stories

export const MainD = (args: props) => <Main {...args} />

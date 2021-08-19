import { Meta } from '@storybook/react'
import { MorePosts, props } from '.'
import { Posts } from './postMock'

const stories = {
  title: 'MorePosts',
  component: MorePosts,
  args: {
    posts: Posts,
  },
} as Meta<props>

export default stories

export const MorePostsD = (args: props) => <MorePosts {...args} />

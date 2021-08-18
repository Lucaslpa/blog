import { Meta } from '@storybook/react'
import { LatestPosts, props } from '.'
import { Post } from './mockPosts'

const stories = {
  title: 'LatestPosts',
  component: LatestPosts,
  args: {
    posts: [Post, Post, Post, Post, Post, Post],
  },
} as Meta<props>

export default stories

export const LatestPostsD = (args: props) => <LatestPosts {...args} />

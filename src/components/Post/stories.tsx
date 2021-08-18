import { Meta } from '@storybook/react'
import { Post as PostD, props } from '.'
import { Post as PostMock } from './mockPost'

const stories = {
  title: 'Post',
  component: PostD,
  args: {
    type: 'Featured',
    post: PostMock,
  },
} as Meta<props>
export default stories

export const Post = (args: props) => <PostD {...args} />

import { Meta } from '@storybook/react'
import { Author, props } from '.'
import { Post } from './mockPosts'

const stories = {
  title: 'Author',
  component: Author,
  args: {
    data: [Post, Post, Post, Post, Post],
  },
} as Meta<props>

export default stories

export const AuthorD = (args: props) => <Author {...args} />

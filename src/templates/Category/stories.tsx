import { Meta } from '@storybook/react'
import { Category, props } from '.'
import { Post } from './mockPosts'

const stories = {
  title: 'Category',
  component: Category,
  args: {
    data: [Post, Post, Post, Post, Post],
  },
} as Meta<props>

export default stories

export const CategoryD = (args: any) => <Category {...args} />

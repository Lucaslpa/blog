import { Meta } from '@storybook/react'
import { FullPost, props } from '.'
import { Post } from './postMock'

const stories = {
  title: 'FullPost',
  component: FullPost,
  args: { post: Post },
} as Meta<props>

export default stories

export const FullPostD = (args: props) => <FullPost {...args} />

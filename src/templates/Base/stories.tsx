import { Meta } from '@storybook/react'
import { Base, props } from '.'
import { Settings } from './Mock'
import { MorePosts } from '../MorePosts'
import { LatestPosts } from '../LatestPosts'
import { Posts } from '../../api/Posts'

const stories = {
  title: 'Base',
  component: Base,
  args: {
    settings: Settings.data,
  },
} as Meta<props>
export default stories

export const StoriesD = (args: props) => (
  <Base {...args}>
    <LatestPosts posts={Posts} />
    <MorePosts posts={Posts} />
  </Base>
)

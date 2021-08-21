import { Meta } from '@storybook/react'
import { Base, props } from '.'
import { Settings } from './Mock'
import { MorePosts } from '../MorePosts'
import { LatestPosts } from '../LatestPosts'
import { Posts } from '../../api/Posts'

import { Category } from '../Category'

const stories = {
  title: 'Base',
  component: Base,
  args: {
    settings: Settings.data,
  },
} as Meta<props>
export default stories

export const StoriesHome = (args: props) => (
  <Base {...args}>
    <LatestPosts posts={Posts} />
    <MorePosts posts={Posts} />
  </Base>
)

export const StoriesCategory = (args: props) => (
  <Base {...args}>
    <Category posts={Posts} settings={Settings.data} />
  </Base>
)

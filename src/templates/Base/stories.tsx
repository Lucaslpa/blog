import { Meta } from '@storybook/react'
import { Base, props } from '.'
import { Settings } from './Mock'

const stories = {
  title: 'Base',
  component: Base,
  args: {
    settings: Settings.data,
  },
} as Meta<props>
export default stories

export const StoriesD = (args: props) => <Base {...args} />

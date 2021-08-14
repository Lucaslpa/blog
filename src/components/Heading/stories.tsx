import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Heading, props } from '.'

const stories = {
  title: 'Heading',
  component: Heading,
  args: {
      children: 'Hello world',
      size: 'big'
  }
}

export default stories

export const Template = (args: props) => <Heading {...args} />

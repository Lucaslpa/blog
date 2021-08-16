import { FullPost } from '.'
import data from './datamock'

const stories = {
  title: 'FullPost',
  component: FullPost,
  args: data,
}

export default stories

export const FullPostD = (args: any) => <FullPost {...args} />

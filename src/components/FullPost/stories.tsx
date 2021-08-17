import { FullPost } from '.'
import {post} from '../../pages/api/Posts'

const stories = {
  title: 'FullPost',
  component: FullPost,
  args: post,
}

export default stories

export const FullPostD = (args: any) => <FullPost {...args} />

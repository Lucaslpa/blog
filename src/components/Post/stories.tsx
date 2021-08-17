import { Post as PostD } from '.'
import { post } from '../../pages/api/Posts'

const stories = {
  title: 'Post',
  component: PostD,
  args: {
    type: 'Normal',
    data: post
  },
}
export default stories

export const Post = (args: any) => <PostD {...args} />

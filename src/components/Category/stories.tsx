import { Category } from '.'
import { Posts } from '../../pages/api/Posts'



const stories = {
  title: 'Category',
  component: Category,
  args: {
    data: Posts,
  },
}

export default stories

export const CategoryD = (args: any) => <Category {...args} />

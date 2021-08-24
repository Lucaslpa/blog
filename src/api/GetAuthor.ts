import request from 'graphql-request'
import { Settings } from '../templates/Home/postMock'
import { Posts } from '../templates/MorePosts/postMock'
import { AllURL } from './URLS'
import { QueryPostsByAuthor } from '../graphql/Filters'

type getPostsByCategoryReturn = {
  posts: typeof Posts
  categories: typeof Settings.data.categories
  setting: typeof Settings.data.setting
}

export const GetPostsByAuthor = async (
  author: string,
  start: number,
  limit: number
): Promise<getPostsByCategoryReturn> => {
  const variables = {
    Name: author,
    start,
    limit,
    sort: 'published_at:desc',
  }

  console.log(variables)
  const response = await request(AllURL, QueryPostsByAuthor, variables)

  return response
}

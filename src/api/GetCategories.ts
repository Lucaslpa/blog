import request from 'graphql-request'
import { Settings } from '../templates/Home/postMock'
import { Posts } from '../templates/MorePosts/postMock'
import { AllURL } from './URLS'
import { QueryCategories, QueryPostsByCategory } from '../graphql/Filters'

type getPostsByCategoryReturn = {
  posts: typeof Posts
  categories: typeof Settings.data.categories
  setting: typeof Settings.data.setting
}

export const GetCategories = async (): Promise<string[]> => {
  const response = await request(AllURL, QueryCategories)
  return response
}

export const GetPostsByCategory = async (
  category: string,
  start: number,
  limit: number
): Promise<getPostsByCategoryReturn> => {
  const variables = {
    category,
    start,
    limit,
    sort: 'published_at:desc',
  }
  const response = await request(AllURL, QueryPostsByCategory, variables)
 
  return response
}

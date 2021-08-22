import request from 'graphql-request'
import { Settings } from '../templates/Home/postMock'
import { Posts } from '../templates/MorePosts/postMock'
import { AllURL } from './URLS'
import { QueryPostsByCategory } from '../graphql/Query_Posts_By_Category'
import { QueryGetCategories } from '../graphql/Query_Get_Categories'

type getPostsByCategoryReturn = {
  posts: typeof Posts
  categories: typeof Settings.data.categories
  setting: typeof Settings.data.setting
}

export const GetCategories = async (): Promise<string[]> => {
  const response = await request(AllURL, QueryGetCategories)
  return response
}

export const GetByCategory = async (
  category: string
): Promise<getPostsByCategoryReturn> => {
  const variables = {
    category,
  }
  const response = await request(AllURL, QueryPostsByCategory, variables)
  return response
}

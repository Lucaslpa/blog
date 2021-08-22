import { request } from 'graphql-request'
import { AllURL } from './URLS'
import { QueryPosts } from '../graphql/Query_Posts'
import { QueryPost } from '../graphql/Query_Post'
import { post, Settings, Posts } from './Posts'

type getPostReturn = {
  post: typeof post
  categories: typeof Settings.data.categories
  setting: typeof Settings.data.setting
}

type getPostsReturn = {
  posts: typeof Posts
  categories: typeof Settings.data.categories
  setting: typeof Settings.data.setting
}
export const GetPosts = async (): Promise<getPostsReturn> => {
  const response = await request(AllURL, QueryPosts)
  return response
}

export const GetPost = async (id: string): Promise<getPostReturn> => {
  const variables = {
    id,
  }

  const response = await request(AllURL, QueryPost(), variables)
  return response
}

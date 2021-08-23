import { request } from 'graphql-request'
import { AllURL } from './URLS'
import { QueryPost, QueryPosts } from '../graphql/Post'
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
export const GetPosts = async (
  start: number,
  limit: number
): Promise<getPostsReturn> => {
  const variables = {
    start,
    limit,
    sort: 'published_at:desc',
  }
  const response = await request(AllURL, QueryPosts, variables)

  return response
}

export const GetPost = async (id: string): Promise<getPostReturn> => {
  const variables = {
    id,
    sort: 'createdAt:desc',
  }

  const response = await request(AllURL, QueryPost, variables)
  return response
}

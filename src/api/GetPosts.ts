import { request } from 'graphql-request'
import { AllURL } from './URLS'
import { QueryPosts } from '../graphql/Query_Posts'

export const GetPosts = async () => {
  const response = await request(AllURL, QueryPosts)
  return response
}

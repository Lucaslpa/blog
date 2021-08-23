import { gql } from 'graphql-request'
import { Fragments } from './Fragments'

export const QueryPost = gql`
  ${Fragments}
  query POST($id: ID!) {
    categories {
      Name
    }
    setting {
      LogoText
      LogoImage {
        name
        url
      }
    }
    post(id: $id) {
      ...posts
    }
  }
`

export const QueryPosts = gql`
  ${Fragments}
  query POSTS($start: Int!, $limit: Int!, $sort: String!) {
    categories {
      Name
    }
    setting {
      LogoText
      LogoImage {
        name
        url
      }
    }
    posts(start:$start, limit: $limit, sort: $sort) {
      ...posts
    }
  }
`

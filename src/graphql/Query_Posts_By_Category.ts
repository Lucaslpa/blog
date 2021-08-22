import { gql } from 'graphql-request'
import { Fragments } from './Fragments'

export const QueryPostsByCategory = gql`
  ${Fragments}
  query GET_POSTS_BY_CATEGORY($category: String!) {
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
    posts(where: { categories: { Name: $category } }) {
      ...posts
    }
  }
`

import { gql } from 'graphql-request'
import { Fragments } from './Fragments'

export const QueryCategories = gql`
   ${Fragments}
   query GET_CATEGORIES {
  categories {
    id
    Name
  }
}
}
`
export const QueryPostsByCategory = gql`
  ${Fragments}
  query POSTS_BY_CATEGORY(
    $start: Int!
    $category: String!
    $limit: Int!
    $sort: String!
  ) {
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
    posts(
      where: { categories: { Name: $category } }
      limit: $limit
      sort: $sort
      start: $start
    ) {
      ...posts
    }
  }
`

import { gql } from 'graphql-request'
import { Fragments } from './Fragments'

export const QueryPosts = gql`
   ${Fragments}
  query GET_POSTS {
     
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
    posts {
      ...posts
    }
  }
`

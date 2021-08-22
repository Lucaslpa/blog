import { gql } from 'graphql-request'
import { Fragments } from './Fragments'

export const QueryPost = () => gql`
  ${Fragments}
  query GET_POST($id: ID!) {
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

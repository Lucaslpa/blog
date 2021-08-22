import { gql } from 'graphql-request'
import { Fragments } from './Fragments'

export const QueryGetCategories = gql`
   ${Fragments}
   query GET_CATEGORIES {
  categories {
    id
    Name
  }
}
}
`

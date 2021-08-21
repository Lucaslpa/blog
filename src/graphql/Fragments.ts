import { gql } from 'graphql-request'

export const Fragments = gql`
  fragment images on UploadFile {
    name
    url
  }
  fragment author on Author {
    id
    AuthorName
    AuthorDescription
  }
  fragment post on Posts {
    id
    published_at
    Description
    Content
    AllowComments
  }
  fragment posts on Posts {
    ...post
    Image {
      ...images
    }
    categories {
      Name
    }
    authors {
      ...author
    }
  }
`

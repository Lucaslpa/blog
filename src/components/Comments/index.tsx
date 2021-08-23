import { DiscussionEmbed } from 'disqus-react'

interface props {
  id: string
  title: string
  allowComments: boolean
}

export const Comments = ({ id, title, allowComments }: props) => {
  if (allowComments) return null

  return (
    <div>
      <DiscussionEmbed
        shortname="blog-12345"
        config={{
          url: `Post/${id}`,
          identifier: id,
          title,
          language: 'pt_BR',
        }}
      />
    </div>
  )
}

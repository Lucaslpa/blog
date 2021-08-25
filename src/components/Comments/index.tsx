import { DiscussionEmbed } from 'disqus-react'
import styles from './style.module.scss'

interface props {
  id: string
  title: string
  allowComments: boolean
}

export const Comments = ({ id, title, allowComments }: props) => {
  if (!allowComments) return null
  return (
    <div className={styles.wrapper}>
      <DiscussionEmbed
        shortname="blog-12345"
        config={{
          url: `https://blog-flax-sigma.vercel.app/Post/${id}`,
          identifier: id,
          title,
          language: 'pt_BR',
        }}
      />
    </div>
  )
}

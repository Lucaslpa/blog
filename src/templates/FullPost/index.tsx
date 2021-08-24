import Link from 'next/link'
import { Heading } from '../../components/Heading'
import styles from './style.module.scss'
// eslint-disable-next-line import/named
import { Post, Settings } from './postMock'
import { useConvertDate } from '../../hooks/useConvertDate'
import { Base } from '../Base'
import { Comments } from '../../components/Comments'

export interface props {
  post: typeof Post
  settings: typeof Settings.data
}

export const FullPost = ({ post, settings }: props) => {
  const { AuthorName, AuthorDescription } = post.authors[0]
  console.log(post.AllowComments)
  return (
    <Base settings={settings}>
      <div className={styles.wrapper}>
        <div className={styles.titles}>
          <Heading size="big">{post.title}</Heading>
          <Heading size="small">{post.Description}</Heading>
        </div>
        <div className={styles.content}>
          {post && <img alt={post.AltImg} src={post.Image.url} />}
          <p>{post.Content}</p>
          <span>Publicado em: {useConvertDate(post.published_at)}</span>
        </div>
        <div className={styles.author}>
          {AuthorName ? (
            <>
              <Link passHref href={`/Author/${AuthorName}`}>
                <span>{AuthorName}</span>
              </Link>
              <p>{AuthorDescription}</p>{' '}
            </>
          ) : (
            <strong>Tenha uma boa noite</strong>
          )}
        </div>

        <Comments
          id={post.id}
          allowComments={post.AllowComments}
          title={post.title}
        />
      </div>
    </Base>
  )
}

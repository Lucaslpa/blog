import { Heading } from '../../components/Heading'
import { Container } from '../../components/Container'
import styles from './style.module.scss'
// eslint-disable-next-line import/named
import { Post, Settings } from './postMock'
import { useConvertDate } from '../../hooks/useConvertDate'
import { Base } from '../Base'

export interface props {
  post: typeof Post
  settings: typeof Settings.data
}

export const FullPost = ({ post, settings }: props) => {
  const { AuthorName, AuthorDescription } = post.authors[0]

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
              <span>{AuthorName}</span>
              <p>{AuthorDescription}</p>{' '}
            </>
          ) : (
            <strong>Tenha uma boa noite</strong>
          )}
        </div>
      </div>
    </Base>
  )
}

import { Heading } from '../Heading'
import { Container } from '../Container'
import styles from './style.module.scss'
// eslint-disable-next-line import/named
import { Post } from './postMock'

export interface props {
  post: typeof Post
}

export const FullPost = ({ post }: props) => (
  <Container>
    <div className={styles.wrapper}>
      <div className={styles.titles}>
        <Heading size="big">{post.title}</Heading>
        <Heading size="small">{post.Description}</Heading>
      </div>
      <div className={styles.content}>
        {post && <img alt={post.AltImg} src={post.Image.url} />}
        <p>{post.Content}</p>
        <span>{post.published_at}</span>
      </div>
      <div className={styles.author}>
        <span>{post.authors[0].AuthorName}</span>
        <p>{post.authors[0].AuthorDescription}</p>
      </div>
    </div>
  </Container>
)

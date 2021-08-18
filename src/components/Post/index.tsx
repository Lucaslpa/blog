import { Post as PostMock } from './mockPost'
import { Container } from '../Container'
import { Heading } from '../Heading'
import styles from './style.module.scss'

interface data {
  post: typeof PostMock
}
export interface props {
  post: typeof PostMock
  type: 'Featured' | 'SubFeatured' | 'Normal'
}

const PostNormal = ({ post }: data) => (
  <div className={styles.Wrapper}>
    <img src={post.Image.url} alt={post.AltImg} />
    <Heading size="small">{post.title}</Heading>
  </div>
)

const PostFeatured = ({ post }: data) => (
  <div
    data-testid="wrapperf"
    className={styles.WrapperF}
    style={{
      background: `url(${post.Image.url})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
    <div className={styles.postInfos}>
      <h5>{post.categories[0].Name}</h5>
      <div>
        <strong>{post.authors[0].AuthorName}</strong>
        <span>{post.published_at}</span>
      </div>
    </div>
    <Heading size="small">{post.title}</Heading>
  </div>
)

const PostSubFeatured = ({ post }: data) => (
  <div
    data-testid="wrapperS"
    className={styles.WrapperS}
    style={{
      background: `url(${post.Image.url})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
    <Heading size="small">{post.title}</Heading>
  </div>
)

export const Post = ({ post, type }: props) => (
  <Container>
    {type === 'Normal' && <PostNormal post={post} />}
    {type === 'Featured' && <PostFeatured post={post} />}
    {type === 'SubFeatured' && <PostSubFeatured post={post} />}
  </Container>
)

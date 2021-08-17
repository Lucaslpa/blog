import { post } from '../../pages/api/Posts'
import { Container } from '../Container'
import { Heading } from '../Heading'
import styles from './style.module.scss'

export interface props {
  data: typeof post
  type: 'Featured' | 'SubFeatured' | 'Normal'
}

const PostNormal = ({ data }: props) => (
  <div className={styles.Wrapper}>
    <img src={data.img.url} alt={data.img.alt} />
    <Heading size="small">{data.title}</Heading>
  </div>
)

const PostFeatured = ({ data }: props) => (
  <div
    data-testid="wrapperf"
    className={styles.WrapperF}
    style={{
      background: `url(${data.img.url})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
    <div className={styles.postInfos}>
      <h5>{data.category}</h5>
      <div>
        <strong>{data.author.name}</strong>
        <span>{data.date}</span>
      </div>
    </div>
    <Heading size="small">{data.title}</Heading>
  </div>
)

const PostSubFeatured = ({ data }: props) => (
  <div
    data-testid="wrapperS"
    className={styles.WrapperS}
    style={{
      background: `url(${data.img.url})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
    <Heading size="small">{data.title}</Heading>
  </div>
)

export const Post = ({ data, type }: props) => (
  <Container>
    {type === 'Normal' && <PostNormal data={data} type={type} />}
    {type === 'Featured' && <PostFeatured data={data} type={type} />}
    {type === 'SubFeatured' && (
      <PostSubFeatured data={data} type={type} />
    )}
  </Container>
)

import { Container } from '../Container'
import { Heading } from '../Heading'
import styles from './style.module.scss'

export interface props {
  postData: {
    title: string
    imgLink: string
    alt: string
    postInfos: {
      date: string
      author: string
      category: string
    }
  }
  type: 'Featured' | 'SubFeatured' | 'Normal'
}

const PostNormal = ({ postData }: props) => (
  <div className={styles.Wrapper}>
    <img src={postData.imgLink} alt={postData.alt} />
    <Heading size="small">{postData.title}</Heading>
  </div>
)

const PostFeatured = ({ postData }: props) => (
  <div
    data-testid="wrapperf"
    className={styles.WrapperF}
    style={{
      background: `url(${postData.imgLink})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
    <div className={styles.postInfos}>
      <h5>{postData.postInfos.category}</h5>
      <div>
        <strong>{postData.postInfos.author}</strong>
        <span>{postData.postInfos.date}</span>
      </div>
    </div>
    <Heading size="small">{postData.title}</Heading>
  </div>
)

const PostSubFeatured = ({ postData }: props) => (
  <div
    data-testid="wrapperS"
    className={styles.WrapperS}
    style={{
      background: `url(${postData.imgLink})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
    <Heading size="small">{postData.title}</Heading>
  </div>
)

export const Post = ({ postData, type }: props) => (
  <Container>
    {type === 'Normal' && <PostNormal postData={postData} type={type} />}
    {type === 'Featured' && <PostFeatured postData={postData} type={type} />}
    {type === 'SubFeatured' && (
      <PostSubFeatured postData={postData} type={type} />
    )}
  </Container>
)

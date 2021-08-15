import { Container } from '../Container'
import { Heading } from '../Heading'
import styles from './style.module.scss'

interface props {
  postData: {
    title: string
    imgLink: string
    alt: string
    postInfos: {
        date: string, 
        author: string,
        category: string
    }
  }
}

export const Post = ({ postData }: props) => (
  <Container>
    <div className={styles.Wrapper}>
      <img  src={postData.imgLink} alt={postData.alt} />
      <div className={styles.postInfos}>
        <h5>{postData.postInfos.category}</h5>
       <div> 
        <strong>{postData.postInfos.author}</strong>
        <span>{postData.postInfos.date}</span>
       </div>
      </div>
      <Heading size="small">{postData.title}</Heading>
    </div>
  </Container>
)

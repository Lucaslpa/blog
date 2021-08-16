import { Heading } from '../Heading'
import { Container } from '../Container'
import styles from './style.module.scss'

interface props {
  PostData: {
    title: string
    img?: {
      url: string
      alt: string
    }
    subtitle: string
    date: string
    author: {
      name: string
      description: string
    }
    content: string
  }
}

export const FullPost = ({ PostData }: props) => (
  <Container>
    <div className={styles.wrapper}>
      <div className={styles.titles}>
        <Heading size="big">{PostData.title}</Heading>
        <Heading size="small">{PostData.subtitle}</Heading>
      </div>
      <div className={styles.content}>
        {PostData.img && <img alt={PostData.img.alt} src={PostData.img.url} />}
        <p>{PostData.content}</p>
        <span>{PostData.date}</span>
      </div>
      <div className={styles.author}>
        <span>{PostData.author.name}</span>
        <p>{PostData.author.description}</p>
      </div>
    </div>
  </Container>
)

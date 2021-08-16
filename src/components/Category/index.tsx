import { Container } from '../Container'
import { Post } from '../Post'
import { ShowMore } from '../ShowMore'
import styles from './style.module.scss'

interface props {
  data: [
    {
      title: string
      imgLink: string
      alt: string
      postInfos: {
        date: string
        author: string
        category: string
      }
    }
  ]
}

export const Category = ({ data }: props) => {
  if (data && data.length > 0) {
    return (
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            Publicações relacionadas a {data[0].postInfos.category}
          </h2>
          <div>
            {data &&
              data.map((post) => (
                <Post key={post.title} postData={post} type="Normal" />
              ))}
          </div>
          <div className={styles.alignSelf}>
            <ShowMore />
          </div>
        </div>
      </Container>
    )
  }

  return (
    <div className={styles.wrapper}>
      <h1>Infelizmente nada foi encontrado.</h1>
    </div>
  )
}

import { useState } from 'react'
import { post } from '../../pages/api/Posts'
import { Container } from '../Container'
import { Post } from '../Post'
import { ShowMore } from '../ShowMore'
import styles from './style.module.scss'

interface props {
  data: typeof post[]
}

export const Category = ({ data }: props) => {
  const [numberOfCurrentPages, setNumberOfCurrentPages] = useState(5)
  const value =
    data.length >= numberOfCurrentPages
      ? numberOfCurrentPages + 3
      : numberOfCurrentPages
  const currentPages = data.slice(0, numberOfCurrentPages)
  if (currentPages && currentPages.length > 0) {
    return (
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            Publicações relacionadas a {currentPages[0].category}
          </h2>
          <div>
            {currentPages &&
              currentPages.map((posts) => (
                <Post key={posts.title} data={posts} type="Normal" />
              ))}
          </div>
          <div className={styles.alignSelf}>
            <ShowMore execFunc={() => setNumberOfCurrentPages(value)} />
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

import { useState } from 'react'
import { Post, Settings } from './mockPosts'
import { Post as PostComponent } from '../../components/Post'
import { Container } from '../../components/Container'
import { ShowMore } from '../../components/ShowMore'
import styles from './style.module.scss'
import { Base } from '../Base'

export interface props {
  data: typeof Post[]
  settings: typeof Settings.data
}

export const Category = ({ data, settings }: props) => {
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
          <Base settings={settings}>
            <h2 className={styles.title}>
              Publicações relacionadas a {currentPages[0].categories[0].Name}
            </h2>
            <div>
              {currentPages &&
                currentPages.map((postInfos) => (
                  <PostComponent
                    key={postInfos.id}
                    post={postInfos}
                    type="Normal"
                  />
                ))}
            </div>
            <div className={styles.alignSelf}>
              <ShowMore execFunc={() => setNumberOfCurrentPages(value)} />
            </div>
          </Base>
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

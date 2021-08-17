/* eslint-disable react/no-array-index-key */
import { useState } from 'react'
import { ShowMore } from '../ShowMore'
import { Post } from '../Post'
import { Container } from '../Container'
import { usePostsContext } from '../../context/posts'
import styles from './style.module.scss'

interface post {
  title: string
  imgLink: string
  alt: string
  postInfos: {
    date: string
    author: string
    category: string
  }
}

const LatestsMobile = () => {
  const { state } = usePostsContext()
  const featureds = state.posts.slice(0, 3)

  if (featureds && featureds.length > 0) {
    return (
      <div className={styles.latestsMobile}>
        {featureds.map((posts: any, index: number) => (
          <Post key={index} data={posts} type="Normal" />
        ))}
      </div>
    )
  }

  return (
    <div className={styles.latestsMobile}>
      <h1>Nada aqui até o momento :(</h1>
    </div>
  )
}

const LatestsWeb = () => {
  const { state } = usePostsContext()
  const featureds = state.posts.slice(0, 3)

  if (featureds && featureds.length > 0 && featureds.length <= 4) {
    return (
      <div className={styles.latestsWeb}>
        {featureds[0] && <Post data={featureds[0]} type="Featured" />}
        <div className={styles.subfeatured}>
          {featureds[1] && <Post data={featureds[1]} type="SubFeatured" />}
          {featureds[2] && <Post data={featureds[2]} type="SubFeatured" />}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.latestsWeb}>
      <h1>Nada aqui até o momento :(</h1>
    </div>
  )
}

const MorePubs = () => {
  const { state } = usePostsContext()
  const [morePages, setMorePages] = useState(7)
  const currentPages = state.posts.slice(3, morePages)
  const morePagesNextValue =
    state.posts.length >= morePages ? morePages + 3 : morePages

  if (currentPages && currentPages.length > 0) {
    return (
      <div className={styles.old}>
        {currentPages.map((postData: any, index: number) => (
          <Post key={index} data={postData} type="Normal" />
        ))}
        <ShowMore execFunc={() => setMorePages(morePagesNextValue)} />
      </div>
    )
  }

  return (
    <div className={styles.old}>
      <h1>Nada aqui até o momento :(</h1>
    </div>
  )
}

export const Main = () => (
  <Container>
    <div className={styles.wrapper}>
      <section className={styles.featured}>
        <h2 className={styles.latest}>Destaques</h2>

        <LatestsWeb />
        <LatestsMobile />
      </section>

      <section className={styles.oldContainer}>
        <h2 className={styles.oldest}>Outras publicações</h2>
        <MorePubs />
      </section>
    </div>
  </Container>
)

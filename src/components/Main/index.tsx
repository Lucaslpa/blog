/* eslint-disable react/no-array-index-key */
import { useState } from 'react'
import { ShowMore } from '../ShowMore'
import { Container } from '../Container'
import { usePostsContext } from '../../context/posts'
import { Post as PostComponent } from '../Post'
import styles from './style.module.scss'
// eslint-disable-next-line import/named
import { Posts } from './PostsMock'

export interface props {
  posts: typeof Posts
}

const LatestsMobile = ({ posts }: props) => {
  if (posts && posts.length > 0 && posts.length <= 4) {
    return (
      <div className={styles.latestsMobile}>
        {posts.map((postInfos) => (
          <PostComponent post={postInfos} type="Normal" key={postInfos.id} />
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

const LatestsWeb = ({ posts }: props) => {
  if (posts && posts.length > 0 && posts.length <= 4) {
    return (
      <div className={styles.latestsWeb}>
        <PostComponent post={posts[0]} type="Featured" />
        <div>
          <PostComponent post={posts[1]} type="SubFeatured" />
          <PostComponent post={posts[2]} type="SubFeatured" />
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

const MorePubs = ({ posts }: props) => {
  const [morePages, setMorePages] = useState(7)
  const currentPages = posts.slice(3, morePages)
  const morePagesNextValue =
    posts.length >= morePages ? morePages + 3 : morePages

  if (currentPages && currentPages.length > 0) {
    return (
      <div className={styles.old}>
        {currentPages.map((postInfos) => (
          <PostComponent key={postInfos.id} post={postInfos} type="Normal" />
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

export const Main = ({ posts }: props) => (
  <Container>
    <div className={styles.wrapper}>
      <section className={styles.featured}>
        <h2 className={styles.latest}>Destaques</h2>

        <LatestsWeb posts={posts.slice(0, 3)} />
        <LatestsMobile posts={posts.slice(0, 3)} />
      </section>

      <section className={styles.oldContainer}>
        <h2 className={styles.oldest}>Outras publicações</h2>
        <MorePubs posts={posts} />
      </section>
    </div>
  </Container>
)

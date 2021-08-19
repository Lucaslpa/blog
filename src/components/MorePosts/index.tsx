import { useState } from 'react'
import styles from './style.module.scss'
import { Post as PostComponent } from '../Post'
import { Posts } from './postMock'
import { ShowMore } from '../ShowMore'

export interface props {
  posts: typeof Posts
}

export const MorePosts = ({ posts }: props) => {
  const [morePages, setMorePages] = useState(7)
  const currentPages = posts.slice(3, morePages)
  const morePagesNextValue =
    posts.length >= morePages ? morePages + 3 : morePages

  if (currentPages && currentPages.length > 0) {
    return (
      <section className={styles.oldContainer}>
        <h2 className={styles.oldest}>Outras publicações</h2>
        <div className={styles.old}>
          {currentPages.map((postInfos) => (
            <PostComponent key={postInfos.id} post={postInfos} type="Normal" />
          ))}
          <ShowMore execFunc={() => setMorePages(morePagesNextValue)} />
        </div>
      </section>
    )
  }

  return (
    <div className={styles.old}>
      <h1>Nada aqui até o momento :(</h1>
    </div>
  )
}

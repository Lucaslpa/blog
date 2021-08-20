import { useState } from 'react'
import styles from './style.module.scss'
import { Post as PostComponent } from '../../components/Post'
import { Posts } from './postMock'
import { ShowMore } from '../../components/ShowMore'
import { useGetMorePages } from '../../hooks/useGetMorePages'

export interface props {
  posts: typeof Posts
}

export const MorePosts = ({ posts }: props) => {
    const {PagesNextValue, currentPages, setMorePages} = useGetMorePages({ posts })

  if (currentPages && currentPages.length > 0) {
    return (
      <section className={styles.oldContainer}>
        <h2 className={styles.oldest}>Outras publicações</h2>
        <div className={styles.old}>
          {currentPages.map((postInfos) => (
            <PostComponent key={postInfos.id} post={postInfos} type="Normal" />
          ))}
          <ShowMore execFunc={() => setMorePages(PagesNextValue)} />
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

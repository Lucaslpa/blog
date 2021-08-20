import { Post } from './mockPosts'
import { Post as PostComponent } from '../../components/Post'
import styles from './style.module.scss'

export interface props {
  posts: typeof Post[]
}

const Web = ({ posts }: props) => {
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

const Mobile = ({ posts }: props) => {
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

export const LatestPosts = ({ posts }: props) => {
  const ThreeFirstsPosts = posts.slice(0, 3)

  return (
    <section className={styles.featured}>
      <h2 className={styles.latestTitle}>Destaques</h2>
      <Web posts={ThreeFirstsPosts} />
      <Mobile posts={ThreeFirstsPosts} />
    </section>
  )
}

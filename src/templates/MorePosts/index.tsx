import styles from './style.module.scss'
import { Post as PostComponent } from '../../components/Post'
import { Posts as PostsType } from './postMock'
import { ShowMore } from '../../components/ShowMore'
import { useGetMorePosts } from '../../hooks/useGetMore'

export interface props {
  posts: typeof PostsType
}

export const MorePosts = ({ posts }: props) => {
  const { Posts, buttonDisable, handleGetMorePosts } = useGetMorePosts({
    posts,
  })
  const PostsSlice = Posts.slice(3)
  if (PostsSlice && PostsSlice.length > 0) {
    return (
      <section className={styles.oldContainer}>
        <h2 className={styles.oldest}>Outras publicações</h2>
        <div className={styles.old}>
          {PostsSlice.map((postInfos) => (
            <PostComponent key={postInfos.id} post={postInfos} type="Normal" />
          ))}
          <ShowMore
            execFunc={() => handleGetMorePosts()}
            disable={buttonDisable}
          />
        </div>
      </section>
    )
  }

  return <div className={styles.old} />
}

import styles from './style.module.scss'
import { Post as PostComponent } from '../../components/Post'
import { Posts as PostsType } from './postMock'
import { ShowMore } from '../../components/ShowMore'
import { useGetMorePost } from '../../hooks/useGetMore'
import { GetPosts } from '../../api/GetPosts'

export interface props {
  posts: typeof PostsType
}

export const MorePosts = ({ posts }: props) => {
  const { Posts, buttonDisable, handleGetMorePosts } = useGetMorePost({
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
            execFunc={() => handleGetMorePosts(() => GetPosts(Posts.length, 2))}
            disable={buttonDisable}
          />
        </div>
      </section>
    )
  }

  return (
    <div className={styles.old}>
      <strong>...</strong>
    </div>
  )
}

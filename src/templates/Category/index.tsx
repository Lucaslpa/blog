import { useRouter } from 'next/dist/client/router'
import { Post, Settings } from './mockPosts'
import { Post as PostComponent } from '../../components/Post'
import { ShowMore } from '../../components/ShowMore'
import styles from './style.module.scss'
import { Base } from '../Base'
import { useGetMorePostsCategory } from '../../hooks/useGetMore'

export interface props {
  posts: typeof Post[]
  settings: typeof Settings.data
}

export const Category = ({ posts, settings }: props) => {
  const { query } = useRouter()
  const { Posts, buttonDisable, getMorePostsByCategory } =
    useGetMorePostsCategory({ posts, category: String(query.slug) })

  if (Posts && Posts.length > 0) {
    return (
      <Base settings={settings}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            Publicações relacionadas a {Posts[0].categories[0].Name}
          </h2>
          <div>
            {Posts &&
              Posts.map((postInfos) => (
                <PostComponent
                  key={postInfos.id}
                  post={postInfos}
                  type="Normal"
                />
              ))}
          </div>
          <div className={styles.alignSelf}>
            <ShowMore
              execFunc={() => getMorePostsByCategory()}
              disable={buttonDisable}
            />
          </div>
        </div>
      </Base>
    )
  }

  return (
    <div className={styles.wrapper}>
      <h1>Infelizmente nada foi encontrado.</h1>
    </div>
  )
}

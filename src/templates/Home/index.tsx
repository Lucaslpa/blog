import { Container } from '../../components/Container'
import styles from './style.module.scss'
// eslint-disable-next-line import/named
import { Post, Settings } from './postMock'
import { Base } from '../Base'
import { LatestPosts } from '../LatestPosts'
import { MorePosts } from '../MorePosts'

export interface props {
  posts: typeof Post[]
  settings: typeof Settings.data
}

export const Home = ({ posts, settings }: props) => (
  <Container>
    <div className={styles.wrapper}>
      <Base settings={settings}>
        <LatestPosts posts={posts} />
        <MorePosts posts={posts} />
      </Base>
    </div>
  </Container>
)

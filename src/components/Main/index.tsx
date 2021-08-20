/* eslint-disable react/no-array-index-key */
import { Container } from '../Container'
import { LatestPosts } from '../../templates/LatestPosts'
import { MorePosts } from '../MorePosts'
import styles from './style.module.scss'
// eslint-disable-next-line import/named
import { Posts } from './PostsMock'

export interface props {
  posts: typeof Posts
}

export const Main = ({ posts }: props) => (
  <Container>
    <div className={styles.wrapper}>
      <LatestPosts posts={posts} />
      <MorePosts posts={posts} />
    </div>
  </Container>
)

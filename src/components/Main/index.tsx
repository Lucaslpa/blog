/* eslint-disable react/no-array-index-key */
import { useState } from 'react'
import { ShowMore } from '../ShowMore'
import { Container } from '../Container'
import { usePostsContext } from '../../context/posts'
import { Post as PostComponent } from '../Post'
import { LatestPosts } from '../LatestPosts'
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

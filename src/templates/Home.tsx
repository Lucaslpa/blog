import { useEffect } from 'react'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { FullPost } from '../components/FullPost'
import dataMock from '../components/FullPost/datamock'

import { Container } from '../components/Container'
import { usePostsContext } from '../context/posts'
import { buildActions } from '../context/posts/BuildActions'
import { Posts } from '../pages/api/Posts'


export const Home = () => {
  const { dispatch } = usePostsContext()
  const actions = buildActions(dispatch)

  useEffect(() => {
    actions.setPosts(Posts)
  }, [])
  return (
    <Container>
      <Header logoName="Bloguinho" categories={['Tegnologia', 'Video Games']} />
      <Main />
    </Container>
  )
}

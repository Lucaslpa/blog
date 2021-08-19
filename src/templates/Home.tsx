import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { Posts } from '../api/Posts'

import { Container } from '../components/Container'

export const Home = () => (
  <Container>
    <Header logoName="Bloguinho" categories={['Tegnologia', 'Video Games']} />
    <Main   posts={Posts} />
  </Container>
)

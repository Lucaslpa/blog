import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { FullPost } from '../components/FullPost'
import dataMock from '../components/FullPost/datamock'

export const Home = () => (
  <Container>
    <Header logoName="Bloguinho" categories={['Tegnologia', 'Video Games']} />
    <Main/>
  </Container>
)

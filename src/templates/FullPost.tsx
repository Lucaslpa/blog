import { Header } from '../components/Header'
import { post } from '../api/Posts'
import { FullPost as FullPostComponent } from '../components/FullPost'
import { Container } from '../components/Container'

export const FulllPost = () => (
  <Container>
    <Header logoName="Bloguinho" categories={['Tegnologia', 'Video Games']} />
    <FullPostComponent post={post} />
  </Container>
)

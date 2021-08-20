import { Header } from '../components/Header'
import { Posts } from '../api/Posts'
import { Category as CategoryComponent } from '../components/Category'

import { Container } from '../components/Container'

export const Category = () => (
  <Container>
    <Header logoName="Bloguinho" categories={['Tegnologia', 'Video Games']} />
    <CategoryComponent data={Posts} />
  </Container>
)

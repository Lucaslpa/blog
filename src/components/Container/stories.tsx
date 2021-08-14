import { Container } from '.'

const stories = {
  title: 'Container',
  component: Container,
}
export default stories

export const ContainerWithH1 = () => (
  <Container>
    <h1>Testing</h1>
  </Container>
)

import { Container } from '../Container'
import {Post} from '../Post'

const postexample = {
    title: 'Xbox video game',
    imgLink:
      'https://compass-ssl.xbox.com/assets/b8/bb/b8bbffcd-3e6c-4609-a361-ef8c1ab13349.jpg?n=X1S-2019_Superhero-1400_Star-Wars_1920x1080.jpg',
    alt: 'Xbox Imagem',
    postInfos: {
      date: '14/08/2021',
      author: 'Lucas',
      category: 'Video Games',
    },
  }

export const Category = () => (
  <Container>
    <h1>Categóry</h1>
  </Container>
)

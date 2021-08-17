import { render, screen } from '@testing-library/react'
import { Main } from '.'

const PostMock = {
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

describe('Main Component', () => {
  it('', () => {
      const arr = [PostMock, PostMock]
    render(<Main data={arr}/>)
    screen.debug()
    const elements = screen.getAllByText(PostMock.title)
    expect(elements.length).toBe(arr.length * 2)
  })
})

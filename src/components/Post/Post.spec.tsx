import { render, screen } from '@testing-library/react'
import { Post } from '.'
import '@testing-library/jest-dom'

const propsMock = {
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

describe('Post componen', () => {
  it('Element receive correctly props', async () => {
    render(<Post postData={propsMock} />)
    const imgLink = (await screen.findByAltText(propsMock.alt)).getAttribute(
      'src'
    )
    const title = await screen.findAllByText(propsMock.title)
    const category = await screen.findAllByText(propsMock.postInfos.category)
    const author = await screen.findAllByText(propsMock.postInfos.author)
    const date = await screen.findAllByText(propsMock.postInfos.date)
    expect(title[0]).toBeInTheDocument()
    expect(imgLink).toBe(propsMock.imgLink)
    expect(category[0]).toBeInTheDocument()
    expect(author[0]).toBeInTheDocument()  
    expect(date[0]).toBeInTheDocument()
})
})

import {  render, screen } from '@testing-library/react'
import { FullPost } from '.'
import { Post, Settings } from './postMock'
import '@testing-library/jest-dom'
import { post } from '../../api/Posts'

describe('FullPost component', () => {
  it('FullPost should render title, subTitle, date, img and author', async () => {
    render(<FullPost settings={Settings.data} post={Post} />)
    const title = await screen.getByRole('heading', {name: 'Title aqui'})
    const subTitle = await screen.findByText(Post.Description)
    const date = await screen.findByText('Publicado em: 12/08/2021')
    const img = screen.getByRole('img')
    const author = await screen.findByText(Post.authors[0].AuthorName)
    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(author).toBeInTheDocument()
  })
  it(' "Tenha uma boa noite" should be rendered', async () => {
    render(
      <FullPost
        settings={Settings.data}
        post={{
          ...post,
          authors: [{ id: '', AuthorName: '', AuthorDescription: '' }],
        }}
      />
    )
    const textElement = screen.getByText('Tenha uma boa noite')

    expect(textElement).toBeInTheDocument()
  })
})

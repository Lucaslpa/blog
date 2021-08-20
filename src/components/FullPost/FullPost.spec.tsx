import { getByRole, render, screen } from '@testing-library/react'
import { FullPost } from '.'
import { Post } from './postMock'
import '@testing-library/jest-dom'
import { post } from '../../api/Posts'

describe('FullPost component', () => {
  it('FullPost should render title, subTitle, date, img and author', async () => {
    render(<FullPost post={Post} />)
    const title = await screen.findByText(Post.title)
    const subTitle = await screen.findByText(Post.Description)
    const date = await screen.findByText(Post.published_at)
    const img = screen.getByRole('img')
    const author = await screen.findByText(Post.authors[0].AuthorName)
    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(author).toBeInTheDocument()
  })
  it(' "Tenha uma boa noite" should be rendered', async () => {
    render(<FullPost post={{ ...post, authors: [] }} />)
    const textElement = screen.getByRole('strong', {
      name: 'Tenha uma boa noite',
    })

    expect(textElement).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { FullPost } from '.'
import {Post} from './postMock'
import '@testing-library/jest-dom'

describe('FullPost component', () => {
  it('FullPost render props', async () => {
    render(<FullPost post={Post} />)
    const title =  await screen.findByText(Post.title)
    const subTitle = await screen.findByText(Post.Description)
    const date = await screen.findByText(Post.published_at)
    const img = await  screen.getByRole('img')
    const author = await screen.findByText(Post.authors[0].AuthorName)
    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(author).toBeInTheDocument()
  })
})

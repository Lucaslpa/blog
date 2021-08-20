import { render, screen } from '@testing-library/react'
import { LatestPosts } from '.'
import { Post } from './mockPosts'
import '@testing-library/jest-dom'

describe('LatestPosts component', () => {
  it('Should render "Nada aqui até o momento :("', async () => {
    render(<LatestPosts posts={[]} />)
    const element = await screen.findAllByText('Nada aqui até o momento :(')
    screen.debug()
    expect(element[0]).toBeInTheDocument()
    expect(element[1]).toBeInTheDocument()
  })
  it('Should render posts', async () => {
    render(<LatestPosts posts={[Post, Post, Post]} />)
    screen.debug()
    const elements = screen.getAllByRole('heading', { name: 'Title aqui' })
    expect(elements[0]).toBeInTheDocument()
    expect(elements[1]).toBeInTheDocument()
  })
  it('Should render 6 posts', async () => {
    render(<LatestPosts posts={[Post, Post, Post, Post, Post, Post]} />)
    const elements = screen.getAllByRole('heading', { name: 'Title aqui' })
    expect(elements.length).toBe(6)
  })
})

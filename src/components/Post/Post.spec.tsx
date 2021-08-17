import { render, screen } from '@testing-library/react'
import { Post } from '.'
import '@testing-library/jest-dom'
import { post } from '../../pages/api/Posts'

describe('Post component', () => {
  it('Elements receive correctly props in Normal', async () => {
    render(<Post data={post} type="Normal" />)
    const imgLink = (await screen.findByAltText(post.img.alt)).getAttribute(
      'src'
    )
    const title = await screen.findAllByText(post.title)
    expect(title[0]).toBeInTheDocument()
    expect(imgLink).toBe(post.img.url)
  })
  it('Elements receive correctly props in Featured', async () => {
    render(<Post data={post} type="Featured" />)
    const imgLink = (await screen.findByTestId('wrapperf')).getAttribute(
      'style'
    )

    const title = await screen.findAllByText(post.title)
    const category = await screen.findAllByText(post.category)
    const author = await screen.findAllByText(post.author.name)
    const date = await screen.findAllByText(post.date)
    expect(title[0]).toBeInTheDocument()
    expect(category[0]).toBeInTheDocument()
    expect(author[0]).toBeInTheDocument()
    expect(date[0]).toBeInTheDocument()
    expect(imgLink).toBe(
      `background: url(${post.img.url}); background-size: 100%; background-repeat: no-repeat; background-position: center;`
    )
  })

  it('Elements receive correctly props in SubFeatured', async () => {
    render(<Post data={post} type="SubFeatured" />)
    const imgLink = (await screen.findByTestId('wrapperS')).getAttribute(
      'style'
    )
    const title = await screen.findAllByText(post.title)
    expect(title[0]).toBeInTheDocument()
    expect(imgLink).toBe(
      `background: url(${post.img.url}); background-size: 100%; background-repeat: no-repeat; background-position: center;`
    )
  })
})

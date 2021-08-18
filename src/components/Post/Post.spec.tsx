import { render, screen } from '@testing-library/react'
import { Post } from '.'
import '@testing-library/jest-dom'
import { Post as PostMock } from './mockPost'

describe('Post component', () => {
  it('Elements receive correctly props in Normal', async () => {
    render(<Post post={PostMock} type="Normal" />)
    const imgLink = (await screen.getByRole('img')).getAttribute(
      'src'
    )
    const title = await screen.getByRole('heading', {name:'Alguma coisa'})
    expect(title).toBeInTheDocument()
    expect(imgLink).toBe(PostMock.Image.url)
  })
  it('Elements receive correctly props in Featured', async () => {
    render(<Post post={PostMock} type="Featured" />)
    const imgLink = (await screen.findByTestId('wrapperf')).getAttribute(
      'style'
    )

    const title = await screen.getByRole('heading',{name: 'Alguma coisa'})
    const category = await screen.findAllByText(PostMock.categories[0].Name)
    const author = await screen.findAllByText(PostMock.authors[0].AuthorName)
    const date = await screen.findAllByText(PostMock.published_at)
    expect(title).toBeInTheDocument()
    expect(category[0]).toBeInTheDocument()
    expect(author[0]).toBeInTheDocument()
    expect(date[0]).toBeInTheDocument()
    expect(imgLink).toBe(
      `background: url(${PostMock.Image.url}); background-size: 100%; background-repeat: no-repeat; background-position: center;`
    )
  })

  it('Should render props                                            SubFeatured', async () => {
    render(<Post post={PostMock} type="SubFeatured" />)
    const imgLink = (await screen.findByTestId('wrapperS')).getAttribute(
      'style'
    )
    
    const title = await screen.getByRole('heading')
    expect(title).toBeInTheDocument()
    expect(imgLink).toBe(
      `background: url(${PostMock.Image.url}); background-size: 100%; background-repeat: no-repeat; background-position: center;`
    )
  })
})

import { fireEvent, render, screen } from '@testing-library/react'
import { MorePosts } from '.'
import { Posts } from './postMock'
import '@testing-library/jest-dom'

describe('MorePosts Component', () => {
  it('Should render "Nada aqui até o momento :("', () => {
    render(<MorePosts posts={[]} />)

    const element = screen.getByRole('heading', {
      name: 'Nada aqui até o momento :(',
    })
    expect(element).toBeInTheDocument()
  })

  it('Should render posts', () => {
    render(<MorePosts posts={Posts} />)

    screen.debug()
    const posts = screen.getAllByRole('heading', {
      name: 'Qualquer coisa de titulo',
    })
    expect(posts.length).toBe(4)
  })

  it('Should get more posts onClick button show more"', () => {
    render(<MorePosts posts={Posts} />)

    const button = screen.getByRole('button')

    fireEvent.click(button)
    const postsAfterClick = screen.getAllByRole('heading', {
      name: 'Qualquer coisa de titulo',
    })
    expect(postsAfterClick.length).toBe(7)
  })
})

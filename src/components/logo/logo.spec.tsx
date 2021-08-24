import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import  Logo  from './Logo'

describe('test Logo component', () => {
  it('With only text should render Heading Component', () => {
    render(<Logo Url="" Text="Hello test" />)
    const Heading = screen.getAllByRole('heading')
    expect(Heading[0]).toBeInTheDocument()
  })
  it('With URL should render img', () => {
    render(<Logo Text="Hello test" Url="ANY" />)
    const img = screen.getAllByRole('img')
    expect(img[0]).toBeInTheDocument()
  })
  it('Without  text and URL should render Heading "Logo"', () => {
    render(<Logo Url="" Text="" />)
    const Heading = screen.getAllByRole('heading')
    expect(Heading[0].innerHTML).toBe(' Logo')
  })
})

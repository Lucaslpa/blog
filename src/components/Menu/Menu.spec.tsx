import { render, screen } from '@testing-library/react'
import { Settings } from './mockSettings'
import { Menu } from '.'
import '@testing-library/jest-dom'

describe('Menu component', () => {
  it('Should render categories Video Game and Tecnologia ', () => {
    render(<Menu settings={Settings.data} />)
    const videogame = screen.getByText('Video Games')
    const tecnologia = screen.getByText('Tecnologia')
    expect(videogame).toBeInTheDocument()
    expect(tecnologia).toBeInTheDocument()
  })
})

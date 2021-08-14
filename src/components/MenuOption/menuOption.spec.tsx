import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MenuOption } from '.'

describe('Testing MenuOption', () => {
  it('With extraOptions array, MenuOptions should show extra options', async () => {
    render(<MenuOption Name="Home" extraOptions={['Tecnologia', 'Video Games']}/>)
    const element = await screen.findAllByRole('list')
    expect(element[0]).toBeInTheDocument()
  })

  it('MenuOption receive open class on mouse enter ', () => {
    render(
      <MenuOption Name="Home" extraOptions={['Tecnologia', 'Video Games']} />
    )
    const initialClass = screen.getAllByRole('list')[0].className
    fireEvent.mouseEnter(screen.getAllByRole('listitem')[0])
    const finalClass = screen.getAllByRole('list')[0].className
    expect(finalClass).not.toBe(initialClass)
  })
  it('MenuOption remove open class on mouse out', () => {
    render(
      <MenuOption Name="Home" extraOptions={['Tecnologia', 'Video Games']} />
    )
    const initialClass = screen.getAllByRole('list')[0].className
    fireEvent.mouseEnter(screen.getAllByRole('listitem')[0])
    fireEvent.mouseOut(screen.getAllByRole('listitem')[0])
    const finalClass = screen.getAllByRole('list')[0].className
    expect(finalClass).toBe(initialClass)
  })
})

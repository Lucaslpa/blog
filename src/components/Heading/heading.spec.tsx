import { render, screen } from '@testing-library/react'
import { Heading } from '.'

describe('Heading Component', () => {
  it('should have correct classes', async () => {
    const text = 'Hello test'
    render(<Heading size="big">{text}</Heading>)
    const {className} = await screen.findByText(text)
    const color = className.includes('color')
    const big = className.includes('big')
    expect(big).toBeTruthy()
    expect(color).toBeTruthy()
  })
  it('should have big size', async () => {
    const text = 'Hello test'
    render(<Heading size="big">{text}</Heading>)
    const element = await screen.findByText(text)
    expect(element.tagName).toBe('H1')
  })
  it('should have medium size', async () => {
    const text = 'Hello test'
    render(<Heading size="medium">{text}</Heading>)
    const element = await screen.findByText(text)
    expect(element.tagName).toBe('H2')
  })
  it('should have small size', async () => {
    const text = 'Hello test'
    render(<Heading size="small">{text}</Heading>)
    const element = await screen.findByText(text)
    expect(element.tagName).toBe('H4')
  })
})

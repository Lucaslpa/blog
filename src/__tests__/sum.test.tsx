import { screen, render } from '@testing-library/react'
import { sum } from '../../sum'
import { ComponentTest } from '../../component'
import '@testing-library/jest-dom/'

describe('testing sum', () => {
  it('sum', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  })
  it('component test', async () => {
    const element = render(<ComponentTest />)
    const re = await element.findByText('pão')
    expect(re).toBeInTheDocument()
  })
})

import { fireEvent, render, screen } from '@testing-library/react'

import { ShowMore } from '.'

const ExecFuncStub = jest.fn(() => 'executed')

describe('ShowMore component', () => {
  it('props ExecFunc should be executed onClick', async () => {
    render(<ShowMore execFunc={() => ExecFuncStub()} />)

    const element = await screen.findByText('Mostrar Mais')
    fireEvent.click(element)
    expect(ExecFuncStub).toBeCalledTimes(1)
  })
})

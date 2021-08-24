import { act, fireEvent, render, screen } from '@testing-library/react'
import {GetPosts} from '../../api/GetPosts'
import { MorePosts } from '.'
import { Posts } from './postMock'

jest.mock('../../api/GetPosts')

describe('MorePosts', () => {
  it('Should get more posts', async () => {
    render(<MorePosts posts={Posts} />)
    const element = screen.getByRole('button')
    act(() => fireEvent.click(element))
    expect(GetPosts).toBeCalled()
    expect(GetPosts).toBeCalledTimes(1)
  })
})

import { act, fireEvent, render, screen } from '@testing-library/react'
import { useRouter } from 'next/dist/client/router'
import { GetPostsByCategory } from '../../api/GetCategories'
import { Category } from '.'
import { Post, Settings } from './mockPosts'

jest.mock('../../api/GetCategories')
jest.mock('next/dist/client/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('MorePosts', () => {
  it('Should get more posts', async () => {
    render(<Category posts={[Post, Post]} settings={Settings.data} />)
    const element = screen.getByRole('button')
    act(() => fireEvent.click(element))
    expect(GetPostsByCategory).toBeCalled()
    expect(GetPostsByCategory).toBeCalledTimes(1)
  })
})

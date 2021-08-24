import { act, fireEvent, render, screen } from '@testing-library/react'
import * as route from 'next/dist/client/router'
import { GetPostsByAuthor } from '../../api/GetAuthor'
import { Author } from '.'
import { Post, Settings } from './mockPosts'

jest.mock('../../api/GetAuthor')

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
    render(<Author posts={[Post, Post]} settings={Settings.data} />)

    const element = screen.getByRole('button')
    act(() => fireEvent.click(element))
    expect(GetPostsByAuthor).toBeCalled()
    expect(GetPostsByAuthor).toBeCalledTimes(1)
  })
})

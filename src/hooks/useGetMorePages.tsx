import { useState } from 'react'
import { Posts } from '../api/Posts'

export interface props {
  posts: typeof Posts
}

export function useGetMorePages({ posts }: props) {
  const [morePages, setMorePages] = useState(7)
  const currentPages = posts.slice(3, morePages)
  const PagesNextValue = posts.length >= morePages ? morePages + 3 : morePages

  return { currentPages, PagesNextValue, setMorePages}
}

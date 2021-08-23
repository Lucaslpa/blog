import { useEffect, useState } from 'react'
import { post } from '../api/Posts'
import { GetPosts } from '../api/GetPosts'
import { GetPostsByCategory } from '../api/GetCategories'

export interface props {
  posts: typeof post[]
}

export interface propsGetPostsByCategory {
  posts: typeof post[]
  category: string
}

export function useGetMorePosts({ posts }: props) {
  const [start, setStart] = useState(10)
  const limit = 2
  const [Posts, setPosts] = useState(posts)
  const [buttonDisable, setButtonDisable] = useState(false)

  async function handleGetMorePosts() {
    const data = await GetPosts(start, limit)
    setStart(start + limit)
    if (data.posts.length === 0) {
      setButtonDisable(true)
      return
    }
    setPosts([...Posts, ...data.posts])
  }

  return { handleGetMorePosts, Posts, buttonDisable }
}

export function useGetMorePostsCategory({
  posts,
  category,
}: propsGetPostsByCategory) {
  const limit = 2
  const [Posts, setPosts] = useState<typeof posts>([])
  const [start, setStart] = useState(3)

  const [buttonDisable, setButtonDisable] = useState(false)

  useEffect(() => setPosts(posts), [posts])

  async function getMorePostsByCategory() {
    const data = await GetPostsByCategory(category, start, limit)
    setStart(start + limit)
    if (data.posts.length === 0) {
      setButtonDisable(true)
      return
    }
    setPosts([...Posts, ...data.posts])
  }

  return { getMorePostsByCategory, Posts, buttonDisable }
}

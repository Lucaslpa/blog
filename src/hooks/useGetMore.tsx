import { useEffect, useState } from 'react'
import { post } from '../api/Posts'

export interface props {
  posts: typeof post[]
}

export function useGetMorePost({ posts }: props) {
  const limit = 2
  const [Posts, setPosts] = useState<typeof posts>([])
  const [start, setStart] = useState(3)

  const [buttonDisable, setButtonDisable] = useState(false)

  useEffect(() => setPosts(posts), [posts])

  async function handleGetMorePosts(funcGetPostsFromApi: any) {
    const data = await funcGetPostsFromApi()
    setStart(start + limit)
    if (data.posts.length === 0) {
      setButtonDisable(true)
      return
    }
    setPosts([...Posts, ...data.posts])
  }

  return { handleGetMorePosts, Posts, buttonDisable }
}

import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { Home as HomeComponent } from '../templates/Home'
import { GetPosts } from '../api/GetPosts'

const Home: NextPage = () => {
  useEffect(() => {
    const res = GetPosts()
    res.then(r => console.log(r))
  }, [])

  return (
    <div>
      <Head>
        <title>Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div>Oi</div>
    </div>
  )
}

export default Home

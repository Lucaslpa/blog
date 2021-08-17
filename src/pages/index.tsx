import type { NextPage } from 'next'
import Head from 'next/head'
import { Home as HomeComponent } from '../templates/Home'
import { PostsContext } from '../context/posts'

const Home: NextPage = () => (
  <div>
    <Head>
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
    <PostsContext>
      <HomeComponent />
    </PostsContext>
  </div>
)

export default Home

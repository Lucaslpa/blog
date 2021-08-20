import type { NextPage } from 'next'
import Head from 'next/head'
import { FulllPost as FullPostComponent } from '../templates/FullPost'

const FullPost: NextPage = () => (
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
    <FullPostComponent />
  </div>
)

export default FullPost

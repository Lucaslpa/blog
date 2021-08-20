import type { NextPage } from 'next'
import Head from 'next/head'
import { Category as CategoryComponent } from '../templates/Category'

const Category: NextPage = () => (
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

    <CategoryComponent />
  </div>
)

export default Category
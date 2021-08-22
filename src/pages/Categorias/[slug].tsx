import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { Category, props } from '../../templates/Category'
import { GetByCategory, GetCategories } from '../../api/GetCategories'

const Post = ({ posts, settings }: props) => {
  console.log('asasd', posts, settings)
  if (posts && settings) {
    return (
      <div>
        <Head>
          <title>{settings ? settings.setting.LogoText : 'Blog'}</title>
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
        <Category settings={settings} posts={posts} />
      </div>
    )
  }
  return (
    <div>
      <Head>
        <title>{settings ? settings.setting.LogoText : 'Blog'}</title>
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

      <div>
        <h1>Procurando...</h1>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { slug: string } }[] = []

  try {
    const categories = await GetCategories()

    paths = categories.map((name) => ({
      params: {
        slug: name,
      },
    }))
  } catch (e) {
    paths = []
  }
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    let data = null
    const { slug } = params
    try {
      data = await GetByCategory(String(slug))
      console.log('aa', data)
    } catch (e) {
      data = null
    }

    if (!data || !data.posts) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        posts: data.posts,
        settings: { setting: data.setting, categories: data.categories },
      },
    }
  }
  return {
    notFound: true,
  }
}
export default Post

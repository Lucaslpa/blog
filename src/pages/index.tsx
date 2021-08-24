import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { Home as HomeComponent, props } from '../templates/Home'
import { GetPosts } from '../api/GetPosts'

export default function Index({ posts, settings }: props) {
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

        <HomeComponent posts={posts} settings={settings} />
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

      
    </div>
  )
}

export const getStaticProps: GetStaticProps<props> = async () => {
  let data = null

  try {
    data = await GetPosts(0, 10)
  } catch (e) {
    data = null
  }

  if (!data || !data.posts || !data.posts.length) {
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

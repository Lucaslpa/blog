import { GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import Head from 'next/head'
import { props, FullPost } from '../../templates/FullPost'
import { GetPost, GetPosts } from '../../api/GetPosts'


const Post = ({ post, settings }: props) => {
  
  if (post && settings) {
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
        <FullPost post={post} settings={settings} />
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
        <h1>Algo de errado aconteceu :(</h1>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { id: string } }[] = []

  try {
    const posts = await GetPosts()
    paths = posts.posts.map((post) => ({
      params: {
        id: post.id,
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
    const { id } = params
    try {
      data = await GetPost(String(id))
    } catch (e) {
      data = null
    }

    if (!data || !data.post) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        post: data.post,
        settings: { setting: data.setting, categories: data.categories },
      },
    }
  }
  return {
    notFound: true,
  }
}
export default Post

import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import { Author, props } from '../../templates/Author'
import { GetPosts } from '../../api/GetPosts'
import { GetPostsByAuthor } from '../../api/GetAuthor'
import { Loading } from '../../components/Loading'

const Posts = ({ posts, settings }: props) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }
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
        <Author settings={settings} posts={posts} />
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

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { slug: string } }[] = []

  try {
    const data = await GetPosts(0, 20)

    const slugs = data.posts.map((post) => ({
      params: {
        slug: post.authors[0].AuthorName,
      },
    }))
    paths.forEach((element) => {
      slugs.forEach((slug) => {
        if (element.params.slug !== slug.params.slug) {
          paths.push(slug)
        }
      })
    })
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
      data = await GetPostsByAuthor(String(slug), 0, 10)
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
export default Posts

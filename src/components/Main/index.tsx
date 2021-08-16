import { useEffect, useState } from 'react'
import { ShowMore } from '../ShowMore'
import { Post } from '../Post'
import { Container } from '../Container'
import styles from './style.module.scss'

interface post {
  title: string
  imgLink: string
  alt: string
  postInfos: {
    date: string
    author: string
    category: string
  }
}

interface props {
  data: post[]
}

const LatestsMobile = ({ data }: props) => {
  if (data && data.length > 0) {
    return (
      <div className={styles.latestsMobile}>
        {data.map((posts) => (
          <Post key={posts.title} postData={posts} type="Normal" />
        ))}
      </div>
    )
  }

  return (
    <div className={styles.latestsMobile}>
      <h1>Nada aqui até o momento :(</h1>
    </div>
  )
}

const LatestsWeb = ({ data }: props) => {
  if (data && data.length > 0 && data.length <= 4) {
    return (
      <div className={styles.latestsWeb}>
        {data[0] && <Post postData={data[0]} type="Featured" />}
        <div className={styles.subfeatured}>
          {data[1] && <Post postData={data[1]} type="SubFeatured" />}
          {data[2] && <Post postData={data[2]} type="SubFeatured" />}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.latestsWeb}>
      <h1>Nada aqui até o momento :(</h1>
    </div>
  )
}

const MorePubs = ({ data }: props) => {
  if (data && data.length > 0) {
    return (
      <div className={styles.old}>
        {data.map((posts) => (
          <Post key={posts.title} postData={posts} type="Normal" />
        ))}
      </div>
    )
  }

  return (
    <div className={styles.old}>
      <h1>Nada aqui até o momento :(</h1>
    </div>
  )
}

export const Main = ({ data }: props) => {
  const [Featureds, setFeatureds] = useState<typeof data>()
  const [MorePosts, setMorePosts] = useState<typeof data>()

  function convertDataToStatesFeaturedsAndMorePosts() {
    const featureds = data.slice(0, 3)
    const moreposts = data.slice(3, 8)
    setFeatureds(featureds)
    setMorePosts(moreposts)
  }

  useEffect(() => convertDataToStatesFeaturedsAndMorePosts(), [])

  return (
    <Container>
      <div className={styles.wrapper}>
        <section className={styles.featured}>
          <h2 className={styles.latest}>Destaques</h2>
          {Featureds && (
            <>
              <LatestsWeb data={Featureds} />
              <LatestsMobile data={Featureds} />
            </>
          )}
        </section>

        <section className={styles.oldContainer}>
          <h2 className={styles.oldest}>Outras publicações</h2>
          {MorePosts && <MorePubs data={MorePosts} />}
        </section>
        <ShowMore />
      </div>
    </Container>
  )
}

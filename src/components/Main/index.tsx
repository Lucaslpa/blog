import { ShowMore } from '../ShowMore'
import { Post } from '../Post'
import { Container } from '../Container'
import styles from './style.module.scss'

const postexample = {
  title: 'Xbox video game',
  imgLink:
    'https://compass-ssl.xbox.com/assets/b8/bb/b8bbffcd-3e6c-4609-a361-ef8c1ab13349.jpg?n=X1S-2019_Superhero-1400_Star-Wars_1920x1080.jpg',
  alt: 'Xbox Imagem',
  postInfos: {
    date: '14/08/2021',
    author: 'Lucas',
    category: 'Video Games',
  },
}

const LatestsMobile = () => (
  <div className={styles.latestsMobile}>
    <Post postData={postexample} type="Normal" />
    <Post postData={postexample} type="Normal" />
    <Post postData={postexample} type="Normal" />
  </div>
)

const LatestsWeb = () => (
  <div className={styles.latestsWeb}>
    <Post postData={postexample} type="Featured" />
    <div className={styles.subfeatured}>
      <Post postData={postexample} type="SubFeatured" />
      <Post postData={postexample} type="SubFeatured" />
    </div>
  </div>
)

export const Main = () => (
  <Container>
    <div className={styles.wrapper}>
      <section className={styles.featured}>
        <h2 className={styles.latest}>Destaques</h2>
        <LatestsWeb />
        <LatestsMobile />
      </section>

      <section className={styles.oldContainer}>
        <h2 className={styles.oldest}>Outras publicações</h2>
        <div className={styles.old}>
          <Post postData={postexample} type="Normal" />
          <Post postData={postexample} type="Normal" />
          <Post postData={postexample} type="Normal" />
          <Post postData={postexample} type="Normal" />
        </div>
      </section>
      <ShowMore />
    </div>
  </Container>
)

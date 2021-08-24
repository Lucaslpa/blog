import Image from 'next/image'
import loading from '../../assets/loading.gif'
import styles from './style.module.scss'

export const Loading = () => (
  <div className={styles.wrapper}>
    <Image alt="loading" src={loading} />
  </div>
)

import { Heading } from '../Heading'
import styles from './style.module.scss'

interface props {
  Text: string | null
  Url: string | null
}


 export const Logo = ({ Text, Url }: props) => {
  if (Url) {
    return <img className={styles.imgLogo} src={Url} alt="Logo" />
  }
  if (Text && !Url) {
    return <Heading size="medium">{Text}</Heading>
  }
  return <Heading size="medium">Logo</Heading>
}

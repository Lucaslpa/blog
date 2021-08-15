// eslint-disable-next-line no-shadow
import styles from './style.module.scss'

export interface props {
  children: string
  size: 'small' | 'big' | 'medium'
}

export const Heading = ({ children, size }: props) => {
  const small = [styles.color, styles.small].join(' ')
  const big = [styles.color, styles.big].join(' ')
  const medium = [styles.color, styles.medium].join(' ')
  switch (size) {
    case 'small':
      return <h4 className={small}> {children}</h4>
    case 'medium':
      return (
        <h2 className={medium}> {children}</h2>
      )
    case 'big':
      return <h1 className={big}> {children}</h1>
    default:
      return (
        <h4 className={[[styles.color, styles.small]].join('')}> {children}</h4>
      )
  }
}

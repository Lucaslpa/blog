import styles from './style.module.scss'

export type props = {
  html: string
}

export const ContentHTML = ({ html }: props) => {
  if (html) {
    return <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: html } || undefined} />
  }

  return null
}

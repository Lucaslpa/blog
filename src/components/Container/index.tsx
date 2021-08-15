import styles from './style.module.scss'

export const Container = ({ children }: { children: any }) => (
  <div className={styles.Container}>{children}</div>
)

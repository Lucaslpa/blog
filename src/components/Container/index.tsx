import styles from './style.module.scss'

export const Container = ({
  children,
}: {
  children: HTMLElement | JSX.Element
}) => <div className={styles.Container}>{children}</div>

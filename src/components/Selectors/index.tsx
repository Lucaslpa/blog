import styles from './style.module.scss'

export const Selector = () => (
  <div className={styles.selectors}>
    <button type="button">{'<'}</button>
    <button type="button">{'>'}</button>
  </div>
)

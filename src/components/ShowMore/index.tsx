import styles from './style.module.scss'

export const ShowMore = ({ execFunc }: { execFunc: () => unknown }) => (
  <div className={styles.selectors}>
    <button onClick={() => execFunc()} type="button">
      Mostrar Mais
    </button>
  </div>
)
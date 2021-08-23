import styles from './style.module.scss'

export const ShowMore = ({
  execFunc,
  disable,
}: {
  execFunc: () => unknown
  disable: boolean
}) => (
  <div className={styles.selectors}>
    <button disabled={disable} onClick={() => execFunc()} type="button">
      Mostrar Mais
    </button>
  </div>
)

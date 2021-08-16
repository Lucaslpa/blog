import { useState } from 'react'
import styles from './style.module.scss'

export interface props {
  Name: string
  extraOptions?: string[] | null
}

export const MenuOption = ({ Name, extraOptions }: props) => {
  const [ExtraMenuOpen, setExtraMenuOpen] = useState(false)
  return (
    <li
      className={styles.Wrapper}
      onMouseEnter={() => setExtraMenuOpen(true)}
      onMouseLeave={() => setExtraMenuOpen(false)}
      onFocus={() => setExtraMenuOpen(!ExtraMenuOpen)}
      onClick={() => setExtraMenuOpen(!ExtraMenuOpen)}
    >
      <div className={[styles.OptionMenu].join()}>
        <span>{Name}</span>
      </div>

      {!extraOptions ? null : (
        <ul
          className={
            ExtraMenuOpen
              ? styles['ExtraOptions--open']
              : styles['ExtraOptions--closed']
          }
        >
          {extraOptions.length >= 1 &&
            extraOptions.map((name) => <li key={name}>{name}</li>)}
        </ul>
      )}
    </li>
  )
}

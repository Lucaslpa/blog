import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './style.module.scss'

export interface props {
  Name: string
  extraOptions?: string[] | null
  route?: string
}

export const MenuOption = ({ Name, extraOptions, route }: props) => {
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
        {route ? (
          <Link href={route}>
            <span>{Name}</span>
          </Link>
        ) : (
          <span>{Name}</span>
        )}
      </div>

      {extraOptions && (
        <ul
          className={
            ExtraMenuOpen
              ? styles['ExtraOptions--open']
              : styles['ExtraOptions--closed']
          }
        >
          {extraOptions.length >= 1 &&
            extraOptions.map((name) => (
              <Link key={name} href={`/${Name}/${name}`}>
                <li>{name}</li>
              </Link>
            ))}
        </ul>
      )}
    </li>
  )
}

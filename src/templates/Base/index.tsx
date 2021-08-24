import { ReactNode } from 'react'
import { Container } from '../../components/Container'
import { Settings } from './Mock'
import styles from './style.module.scss'
import {Logo} from '../../components/Logo/index'
import { Menu } from '../../components/Menu'

export interface props {
  settings: typeof Settings.data
  children?: ReactNode
}

export const Base = ({ children, settings }: props) => (
  <Container>
    <div className={styles.wrapper}>
      <header className={styles.header} >
        <Logo
          Text={settings.setting.LogoText}
          Url={settings.setting.LogoImage}
        />
        <Menu settings={settings} />
      </header>
      <main className={styles.main} >{children}</main>
    </div>
  </Container>
)

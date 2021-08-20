import { ReactNode } from 'react'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Settings } from './Mock'
import styles from './style.module.scss'

export interface props {
  settings: typeof Settings.data
  children?: ReactNode
}

export const Base = ({ children, settings }: props) => (
  <Container>
    <div className={styles.wrapper}>
      <Header
        logoName={settings.setting.LogoText}
        categories={settings.categories.map((e) => e.Name)}
      />
      <main>{children}</main>
    </div>
  </Container>
)

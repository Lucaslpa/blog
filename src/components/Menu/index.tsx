import { MenuOption } from '../MenuOption'
import { Settings } from './mockSettings'
import styles from './style.module.scss'

export interface props {
  settings: typeof Settings.data
}

export const Menu = ({ settings }: props) => (
  <nav className={styles.Menu}>
    <ul>
      <MenuOption Name="Início" route="/" />

      <MenuOption
        Name="Categorias"
        extraOptions={settings.categories.map((e) => e.Name)}
      />
    </ul>
  </nav>
)

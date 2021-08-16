import { useState } from 'react'
import { Container } from '../Container'
import { Logo } from '../Logo'
import { MenuOption } from '../MenuOption'
import styles from './style.module.scss'

interface props {
    categories?: string[],
    logoName: string,
    URL?: string
}

export const Header = ({categories, logoName, URL}:props) => {
  const [CategoriesExtraOptions, setCategoriesExtraOptions] =
    useState<string[] | undefined >(categories)

  return (
    <Container>
      <div className={styles.Wrapper}>
        <Logo Text={logoName}  Url={URL}/>
        <nav className={styles.Menu}>
          <ul>
            <MenuOption Name="Início" />
            <MenuOption
              Name="Categorias"
              extraOptions={CategoriesExtraOptions}
            />
            <MenuOption Name="Sobre" />
          </ul>
        </nav>
      </div>
    </Container>
  )
}

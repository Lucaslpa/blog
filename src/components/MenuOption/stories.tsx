import { MenuOption } from '.'

const stories = {
  title: 'MenuOption',
  component: MenuOption,
  args: {
    Name: 'Categorias',
    extraOptions: ['Tecnologia', 'Video Games'],
  },
}
export default stories

export const MenuWithExtraOptions = () => (
  <MenuOption
    extraOptions={['Tecnologia', 'Video Games', 'Extra']}
    Name="Categorias"
  />
)

export const MenuWithoutExtraOptions = () => <MenuOption Name="Categorias" />

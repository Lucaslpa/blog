import { Logo } from '.'

const stories = {
  title: 'Logo',
  component: Logo,
  args: {
    Text: '',
    Url: '',
  },
  
}

export default stories

export const logoWithoutURL = (args: any) => <Logo  />

export const logoWithURL = (args: any) => (
  <Logo
    {...args}
    Url="https://toppng.com/uploads/preview/back-icon-back-icon-without-background-115534421835ua8uvskeg.png"
  />
)

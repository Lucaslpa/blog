import  {Logo}  from './Logo'

const stories = {
  title: 'Logo',
  component: Logo,
  args: {
    Text: 'sadasd',
    Url: '',
  },
}

export default stories

export const logoWithoutURL = (args: any) => <Logo {...args} />

export const logoWithURL = (args: any) => (
  <Logo
    {...args}
    Url="https://toppng.com/uploads/preview/back-icon-back-icon-without-background-115534421835ua8uvskeg.png"
  />
)

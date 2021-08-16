import { render, screen } from '@testing-library/react'
import { FullPost } from '.'
import dataMock from './datamock'
import '@testing-library/jest-dom'

describe('FullPost component', () => {
  it('FullPost should receive correctly props', async () => {
    render(<FullPost PostData={dataMock.PostData} />)
    const title =  await screen.findByText(dataMock.PostData.title)
    const subTitle = await screen.findByText(dataMock.PostData.subtitle)
    const date = await screen.findByText(dataMock.PostData.date)
    const img = await  screen.findByAltText(dataMock.PostData.img.alt)
    const author = await screen.findByText(dataMock.PostData.author.name)
    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(author).toBeInTheDocument()
  })
})

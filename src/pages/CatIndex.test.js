import { render, screen } from "@testing-library/react"
import CatIndex from './CatIndex'
import { BrowserRouter } from 'react-router-dom'
import mockCats from '../mockCats'

describe("<CatIndex />", () => {
  it("renders a card for each cat", () => {
    render(
      <BrowserRouter>
        <CatIndex cats={mockCats}/>
      </BrowserRouter>
    )

    mockCats.map((cat)=>{
      const nameElement = screen.getByText(cat.name)
      expect(nameElement).toBeInTheDocument()
    })
  })
})

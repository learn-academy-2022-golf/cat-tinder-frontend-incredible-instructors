import { render, screen } from "@testing-library/react"
import CatShow from './CatShow'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import mockCats from '../mockCats'


  
    const renderComponent = () => {
      render(
      <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
            <Route path="catshow/:id" element={<CatShow cats={mockCats} />}/>
        </Routes>
      </MemoryRouter>
      )
    }

  describe("<CatShow />", ()=>{
    it("renders a card with a cat enjoys", ()=>{
      renderComponent()
      expect(screen.getByText(mockCats[0].enjoys)).toBeInTheDocument()
    })
    it("renders a card with a cat name and age", () => {
      renderComponent()
      expect(screen.getByText(`${mockCats[0].name}, ${mockCats[0].age }`)).toBeInTheDocument()
    })
  })
  
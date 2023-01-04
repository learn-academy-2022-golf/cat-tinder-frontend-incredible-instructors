import { render, screen } from "@testing-library/react"
import CatNew from './CatNew'
import { BrowserRouter } from 'react-router-dom'

describe("<CatNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CatNew/>
      </BrowserRouter>
    )
  })
  it("renders the CatNew page for user", () => {
    const element = screen.getByText(/Create a new cat/i)
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent("Create a new cat")
  })

  it("has a form with entries for name, age, enjoys, and image", () => {
    const formName = screen.getByText(/name/i)
    // screen.debug(formName)
    expect(formName.getAttribute("For")).toEqual("name")

    const formAge = screen.getByText("Age")
    expect(formAge.getAttribute("For")).toEqual("age")

    const formEnjoys = screen.getByText("Enjoys")
    expect(formEnjoys.getAttribute("For")).toEqual("enjoys")

    const formImage = screen.getByText("Image")
    expect(formImage.getAttribute("For")).toEqual("image")
  })
})

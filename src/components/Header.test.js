import { render, screen } from "@testing-library/react";
import Header from './Header'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';

describe("<Header />", ()=>{
  it("renders without crashing", ()=>{
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })
  it("renders a logo img with a src and an alt", ()=>{
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const logo = screen.getByRole("img")
    expect(logo).toHaveAttribute("src", "cat-logo.png")
    expect(logo).toHaveAttribute("alt", "Cat Tinder logo with outline of cat")
  })
  it("has clickable links", ()=>{
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    
    userEvent.click(screen.getByText("Meet the Cats"))

    userEvent.click(screen.getByText("Add a New Cat"))

    userEvent.click(screen.getByText("Adopt a Cat!"))

  })
})
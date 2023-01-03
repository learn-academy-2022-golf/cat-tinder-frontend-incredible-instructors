import Home from './Home'
import { render, screen } from '@testing-library/react'

describe("<Home/>", ()=>{
  it("renders without crashing", ()=>{
    render(<Home/>)

    const div = document.createElement("div")

    expect(screen.getByText(/It's like Tinder, but for Cats/i)).toBeInTheDocument()
  })
})
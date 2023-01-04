import App from './App'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe("<App/>", () => {
  it("renders without crashing", () => {

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
      )

  })
})
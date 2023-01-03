import React from 'react'
import notCat from '../assets/not-cat.jpg'

const NotFound = () => {
  return (
    <div className="page-body">
      <h3>Ooops, no cats here!</h3>
      <img src={notCat} alt="little dog in a knit hat" className="cat-friend" />
    </div>
  )
}
export default NotFound
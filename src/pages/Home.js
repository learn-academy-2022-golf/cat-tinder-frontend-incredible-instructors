import React, { Component } from 'react'
import raisins from '../assets/raisins.jpeg'

const Home = () => {
  return (
    <div className="page-body">
      <h3>Welcome to Cat Tinder!</h3>
      <br />
      <h4>It's like Tinder, but for Cats.</h4>
      <br />
      <img src={raisins} alt="portrait of a flat-faced cat" className="raisins" />
    </div>
  )
}
export default Home

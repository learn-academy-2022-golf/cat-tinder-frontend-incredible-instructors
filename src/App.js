import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import mockCats from './mockCats'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  const [cats, setCats] = useState(mockCats)

  const createCat = (cat) => {
    console.log("Created cat:", cat)
  }

  return (
  <>
    <Header />
    <Routes >
        <Route path='/' element={<Home  />}/>
        <Route path='/catindex' element={<CatIndex cats={cats} />} />
        <Route path='/catshow/:id' element={<CatShow cats={cats} />} />
        <Route path='/catnew' element={<CatNew createCat={createCat} />} />
        <Route path='/catedit' element={<CatEdit />} />
        <Route path="*"  element={<NotFound/>} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;


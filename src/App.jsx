import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Viewcart from './components/Viewcart.jsx'
import { createContext, useState } from 'react'

export const cartContext=createContext()

function App() {
  const [cart,setCart]=useState([])
  return (
    <cartContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Viewcart' element={<Viewcart/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App

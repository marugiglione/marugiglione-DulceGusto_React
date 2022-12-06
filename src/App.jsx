
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Navbar2 from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart/Cart'


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import CartContextProvider from './context/CartContext'


function App() {
  console.log('App')
  
  return (
    <BrowserRouter>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<ItemListContainer  />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer  />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        <Route path='/cart'  element={<Cart />}/>
        
        <Route path='*' element={<Navigate to='/' />} />             
      </Routes>

    </BrowserRouter>
  )
}

export default App

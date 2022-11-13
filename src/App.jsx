
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

//import { useState } from 'react'

import Navbar2 from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart/Cart'

// .css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  //const [count, setCount] = useState(0)
  const saludo = 'saludando' // estado

  const saludar = () => {
      console.log('hola soy app')
  } 

  return (
    <BrowserRouter>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={saludo} saludar={ saludar } />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={saludo} saludar={ saludar } />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        <Route path='/cart'  element={<Cart />}/>
        
        <Route path='*' element={<Navigate to='/' />} />             
      </Routes>

    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/itemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer titulo = {'DULCE GUSTO'} subtitulo = {'Productos'}/>
    </div>
  )
}

export default App

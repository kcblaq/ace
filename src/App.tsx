import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <HomePage />
    </div>
  )
}

export default App

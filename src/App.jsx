import { useState } from 'react'
import './index.css'
import Hero from './Hero.jsx'
import Bento from './Bento.jsx'
import Price from './Price.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Bento />
      <Price />
    </>
  )
}

export default App

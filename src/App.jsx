import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App

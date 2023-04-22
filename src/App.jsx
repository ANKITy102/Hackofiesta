import { useState } from 'react'
import Header from './components/Header'
import Heroo from './components/Heroo'
import Footer from './components/Footer'
import Background from './components/Background'
import About from './components/About'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [count, setCount] = useState(0)
  return (
      <Router>
    <div>
      <Header />
      <Heroo />
      <Background />
      <About />
      <Footer />
    </div>
    </Router>
  )
}

export default App

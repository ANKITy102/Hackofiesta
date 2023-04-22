import { useState } from 'react'
import Header from './components/Header'
import Heroo from './components/Heroo'
import Footer from './components/Footer'
import Section from './components/Section'

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
      <Footer />
    </div>
    </Router>
  )
}

export default App

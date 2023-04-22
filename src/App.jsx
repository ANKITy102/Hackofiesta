import { useState } from 'react'
import Header from './components/Header'
import Heroo from './components/Heroo'

import './App.css'
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
    </div>
    </Router>
  )
}

export default App

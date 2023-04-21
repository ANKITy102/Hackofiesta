import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Test from './components/Test'
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
      <Routes>
       <Route exact path="/" element={<Section/>}/>
       <Route exact path="/Test" element={<Test/>}/>
       </Routes>
   
      
      <Footer />
    </div>
    </Router>
  )
}

export default App

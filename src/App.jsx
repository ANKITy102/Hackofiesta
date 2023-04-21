import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
// import MyForm from './components/MyForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      {/* <MyForm /> */}
      <Footer />
    </div>
  )
}

export default App

<<<<<<< HEAD
import { useState } from "react";
import Header from "./components/Header";
import Heroo from "./components/Heroo";
import Footer from "./components/Footer";
import Background from "./components/Background";
=======
import { useState } from 'react'
import Header from './components/Header'
import Heroo from './components/Heroo'
import Footer from './components/Footer'
import Background from './components/Background'
import About from './components/About'
>>>>>>> 8db09a7bca054ae32204b4dc3c081612b1b08387

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  return (
<<<<<<< HEAD
    <Router>
      <div>
        <Header />
        <Heroo />
        <Background />
        <Footer />
      </div>
=======
      <Router>
    <div>
      <Header />
      <Heroo />
      <Background />
      <About />
      <Footer />
    </div>
>>>>>>> 8db09a7bca054ae32204b4dc3c081612b1b08387
    </Router>
  );
}

export default App;

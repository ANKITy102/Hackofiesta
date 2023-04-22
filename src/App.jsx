import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyForm from "./components/MyForm";
import Section from "./components/Section";
import Heroo from "./components/Heroo";
import Background from "./components/Background";
import About from "./components/About";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Heroo />
                <Section />
              </>
            }
          />
          <Route exact path="/Test" element={<MyForm />} />
          <Route exact path="/Background" element={<Background />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

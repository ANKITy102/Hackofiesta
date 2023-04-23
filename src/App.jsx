import { useState } from "react";
import Header from "./components/Header";
import Heroo from "./components/Heroo";
import Footer from "./components/Footer";
import Background from "./components/Background";
import About from "./components/About";
import Testform from "./components/Testform";
import MyForm from "./components/MyForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <Header />
        <Heroo />
        <Background />
        <About />
        <Footer />
      <MyForm /> */}
      <Testform />
    </div>
  );
}

export default App;

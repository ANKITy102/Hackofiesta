import { useState } from "react";
import Header from "./components/Header";
import Heroo from "./components/Heroo";
import Footer from "./components/Footer";
import Background from "./components/Background";
import About from "./components/About";
import Testform from "./components/Testform";
import TakingTest from "./components/TakingTest";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("hello");
    const element = document.getElementById("Backgroundddd");
    if (element) {
      //  Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const aboutClick = (event) => {
    event.preventDefault();
    console.log("hello");
    const element = document.getElementById("aboutUsContainer");
    if (element) {
      //  Will scroll smoothly to the top of the next section
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const [count, setCount] = useState(0);
  return (
    <Router>
      <div>
        <Header click={handleClick} aboutClick={aboutClick} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Heroo />
                <Background />
                <About />
              </>
            }
          />
          <Route path="TakingTest" element={<TakingTest />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

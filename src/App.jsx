import { useState } from "react";
import Header from "./components/Header";
import Heroo from "./components/Heroo";
import Footer from "./components/Footer";
import Background from "./components/Background";
import About from "./components/About";
import Testform from "./components/Testform";
import TakingTest from "./components/TakingTest";
import Result from "./components/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [r1, setA] = useState(0);
  const [r2, setB] = useState(0);
  const [r3, setC] = useState(0);
  const [r4, setD] = useState(0);
  const [r5, setE] = useState(0);
  const [r6, setF] = useState(0);
  const [r7, setG] = useState(0);
  const [r8, setH] = useState(0);
  const [r9, setI] = useState(0);
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
  const setDataResult = (a, b, c, d, e, f, g, h, i) => {
    setA(a);
    setB(b);
    setC(c);
    setD(d);
    setE(e);
    setF(f);
    setG(g);
    setH(h);
    setI(i);
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
          <Route
            path="TakingTest"
            element={<TakingTest setTestData={setDataResult} />}
          />
          <Route
            path="Result"
            element={
              <Result
                g1={r1}
                g2={r2}
                g3={r3}
                g4={r4}
                g5={r5}
                g6={r6}
                g7={1.0304055}
                g8={48.00984}
                g9={r9}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { useState, useEffect, useRef } from "react";
// import { useHistory } from "react-router-dom";
import "./Header.css";
import "./Testform.css";
// import Background from "./Background";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
export default function Header(props) {
  const myRef = useRef(null);
  const [width, setWidth] = useState("0");
  const [displaySt, setdisplaySt] = useState("none");

  // const history = useHistory();

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   document.getElementById("closebtnTestform").style.display=;
  //   history.push("/new-route");
  // };

  const toggleMenu = () => {
    document.getElementById("nav-icon1").classList.toggle("open");
    if (width == "0") {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";

      setWidth("100vw");
    } else {
      setWidth("0");
      document.body.style.height = "normal";
      document.body.style.overflowY = "auto";
    }
  };
  const toggleMenu2 = () => {
    document.getElementById("nav-icon1").classList.toggle("open");
    setWidth("0");
    document.body.style.height = "normal";
    document.body.style.overflowY = "auto";
    window.scrollTo(0, 0);
  };
  const testClick = (event) => {
    event.preventDefault();
    // setdisplaySt("flex");
    document.getElementById("testformBig").style.display = "flex";

    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  };
  const testCloseBtn = () => {
    // document.getElementById("testformBig").style.transform = "scale(0.4)";

    document.getElementById("testformBig").style.display = "none";
    document.body.style.height = "normal";
    document.body.style.overflowY = "auto";
  };
  return (
    <>
      <header>
        <img src="src\assets\images\tp-removebg-preview.png" alt="myLogo" />
        <ul>
          <li className="navbarLink">
            <Link to="/">Home</Link>
          </li>
          <li className="navbarLink">
            <Link to="/Test" id="getFormFromthis" onClick={testClick}>
              Test
            </Link>
          </li>
          <li className="navbarLink">
            <Link onClick={props.click} to="/Background">
              Background
            </Link>
          </li>
          <li className="navbarLink">
            <Link onClick={props.aboutClick}>About</Link>
          </li>
          <div id="nav-icon1" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ul>
      </header>

      {/* Popup */}
      <div
        className="testform"
        id="testformBig"
        style={{ display: `${displaySt}` }}
        ref={myRef}
      >
        <div
          className="testformClose"
          style={{
            fontSize: "20px",
            position: "absolute",
            right: "35px",
            top: "20px",
            color: "white",
            fontWeight: "bold",
            fontFamily: "cursive",
          }}
          onClick={testCloseBtn}
          id="closebtnTestform"
        >
          X
        </div>
        <input className="Name" type="text" placeholder="Name" />
        <div className="Gender">
          <span>Gender</span>
          <div className="sex">
            <label htmlFor="male">
              <input type="radio" id="male" value="Male" name="sex" /> Male
            </label>
            <label htmlFor="female">
              <input type="radio" id="female" value="Female" name="sex" />{" "}
              Female
            </label>
            <label htmlFor="others">
              <input type="radio" id="others" value="Others" name="sex" />{" "}
              Others
            </label>
          </div>
        </div>
        <input className="Age" type="number" max="125" placeholder="Age" />
        <Link to="/TakingTest" className="button">
          Start Test
        </Link>
      </div>

      <div className="sideMenu" style={{ width: `${width}` }}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={toggleMenu2}
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>{" "}
          </li>
          <li>
            <Link
              to="/Test"
              onClick={toggleMenu2}
              style={{ textDecoration: "none" }}
            >
              Test
            </Link>
          </li>
          <li>
            <Link
              to="/Background"
              onClick={toggleMenu2}
              style={{ textDecoration: "none" }}
            >
              Background
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              onClick={toggleMenu2}
              style={{ textDecoration: "none" }}
            >
              About
            </Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

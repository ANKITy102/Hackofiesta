import React from 'react'
import { useState, useEffect } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
export default function Header() {
  const [width, setWidth]=useState('0')


  const toggleMenu=()=>{
    document.getElementById('nav-icon1').classList.toggle('open')
    if(width=='0'){
      document.body.style.height="100vh"
     document.body.style.overflow="hidden"
      
      setWidth('100vw')
    }
    else{
      setWidth('0');
      document.body.style.height="normal"
      document.body.style.overflowY="auto"
    }
  }
  const toggleMenu2=()=>{
    document.getElementById('nav-icon1').classList.toggle('open')
      setWidth('0');
      document.body.style.height="normal"
      document.body.style.overflowY="auto"
      window.scrollTo(0,0); 
  }
 
  return (
    <>
    <header>
      <img src="src\assets\images\tp-removebg-preview.png" alt="myLogo" />
      <ul>
        <li className="navbarLink"><Link to="/">Home</Link></li>
        <li className="navbarLink"><Link to="/Test">Test</Link></li>
        <li className="navbarLink"><Link to="/Background" smooth>Background</Link></li>
        <li className="navbarLink"><Link to="/About">About</Link></li>
        <div id="nav-icon1" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      
      </ul>
      
    </header>
    <div className="sideMenu" style={{width : `${width}`}}>
          <ul>
            <li><Link to="/" onClick={toggleMenu2} style={{textDecoration: "none"}}>Home</Link> </li>
            <li><Link to="/Test" onClick={toggleMenu2} style={{textDecoration: "none"}}>Test</Link></li>
            <li><Link to="/Background" onClick={toggleMenu2} style={{textDecoration: "none"}}>Background</Link></li>
            <li><Link to="/About" onClick={toggleMenu2} style={{textDecoration: "none"}}>About</Link> </li>
          </ul>
      </div>
    </>
  )
}

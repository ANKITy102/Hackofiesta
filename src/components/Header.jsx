import React from 'react'
import { useState } from 'react'
import "./Header.css"
import about from '../assets/aboutSvg.svg'
export default function Header() {
  const [width, setWidth]=useState('0')
  const [opacity, setOpacity]=useState('0')
  const toggleMenu=()=>{
    document.getElementById('nav-icon1').classList.toggle('open')
    if(width=='0'){

      setWidth('100vw')
      setOpacity('1')
    }
    else{
      setWidth('0');
      setOpacity('0')
    }
  }
  return (
    <>
    <header>
      <img src="src\assets\images\tp-removebg-preview.png" alt="myLogo" />
      <ul>
        <li class="navbarLink"><a href="#">
          <div style={{textAlign:"center"}}><i class="fa-solid fa-house"></i></div> Home</a></li>
        <li class="navbarLink"><a href="#">
        <div style={{textAlign:"center"}}><i class="fa-solid fa-chart-simple"></i></div>Background</a></li>
        <li class="navbarLink"><a href="#">
        <div style={{textAlign:"center"}}> <i class="fa-solid fa-circle-info"></i> </div> 
          About</a></li>
        <div id="nav-icon1" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      
      </ul>
      
    </header>
    <div className="sideMenu" style={{width : `${width}`}}>
          <ul>
            <li><i class="fa-solid fa-house"></i> Home</li>
            <li><i class="fa-solid fa-chart-simple"></i> Background</li>
            <li><i class="fa-solid fa-circle-info"></i> About</li>
          </ul>
      </div>
    </>
  )
}

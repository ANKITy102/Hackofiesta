import React from 'react'
import "./AboutMe.css"

export default function AboutMe(props) {
  return (
    <div class="aboutme" key={props.key}>
      <img className='aboutme--img' src={props.src} alt="ProfilePic" />
      <div className="aboutme--text">
        <h2>{props.name}</h2>
        <span>{props.dis}</span>
      </div>
    </div>
  )
}

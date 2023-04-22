import React from 'react'
import "./Heroo.css"

export default function Heroo() {
  return (
    <div className="Heroo">
      <div className="heroo--text">
        <img className="heroo--imgtext" src="src\assets\images\hero_heading.png" alt="HeroHeading" />
        <button className="heroo--button">TAKE TEST</button>
      </div>
      <div className="heroo--imgdiv">
        <img className="heroo--img" src="src\assets\images\hero_doctor.png" alt="HeroDoctor" />
      </div>
    </div>
  )
}

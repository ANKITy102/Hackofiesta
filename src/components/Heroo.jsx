import React from 'react'
import "./Heroo.css"
import { Link } from 'react-router-dom'


export default function Heroo() {
  return (
    <>
    <div className="heroo" id="Heroo">
      <div className="heroo--text">
        <img className="heroo--imgtext" src="src\assets\images\hero_heading.png" alt="HeroHeading" />
        <Link className="heroo--custom-btn heroo--btn-11" to="/Test">Take Test</Link>
      </div>
      <div className="heroo--imgdiv">
        <img className="heroo--img" src="src\assets\images\hero_doctor.png" alt="HeroDoctor" />
      </div>
    </div>
    <div className="heroo--bottom">Our AI-based Parkinson's detection website utilizes advanced machine learning techniques to analyze Voice features and accurately identify early-stage symptoms of the disease, allowing for early intervention and improved patient outcomes.</div>
    </>
  )
}

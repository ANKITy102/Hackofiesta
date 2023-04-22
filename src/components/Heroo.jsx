import React from 'react'
import "./Heroo.css"

export default function Heroo() {
  return (
    <>
    <div className="Heroo">
      <div className="heroo--text">
        <img className="heroo--imgtext" src="src\assets\images\hero_heading.png" alt="HeroHeading" />
        {/* <button className="heroo--button">TAKE TEST</button> */}
        <button className="heroo--custom-btn heroo--btn-11" to="/Test">Take Test <div class="dot"></div></button>
      </div>
      <div className="heroo--imgdiv">
        <img className="heroo--img" src="src\assets\images\hero_doctor.png" alt="HeroDoctor" />
      </div>
    </div>
    <div className="Heroo--bottom">The sun shone brightly in the cloudless sky as I walked along the dirt path that wound its way through the lush green forest. Birds chirped happily in the trees above, and a gentle breeze rustled the leaves.</div>
    </>
  )
}

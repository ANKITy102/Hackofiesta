import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer>
        <img className='footer--logo' src="src\assets\images\footer_logo.png" alt="white_PDetect_logo" />       
        <div className="footer--parts">
            <div className="footer--part1">
            Produce a machine learning model to diagnose Parkinson’s disease given various features of a patient's speech with at least 90% accuracy and/or a Matthews Correlation Coefficient of at least 0.9. 
            </div>
            <div className="footer--part2">
                <ul>
                    <li className="footer-links"><Link to="/">Home</Link></li>
                    <li className="footer-links"><Link to="/Test">Test</Link></li>
                    <li className="footer-links"><Link to="/Background">Background</Link></li>
                    <li className="footer-links"><Link to="/About">About</Link></li>
                </ul>
            </div>
            <img className='neural_ninjas' src="src\assets\images\neural_ninja.png" alt="neural_ninjas" />
        </div>
                <div className="icons">
                    <a href="https://twitter.com/ParkinsonDotOrg" className="icon1 icon--twitter">
                        <i className="ri-twitter-line"></i>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/Parkinson%27s_disease" className="icon1 icon--wikipedia">
                    <i className="fa-brands fa-wikipedia-w"></i>
                    </a>
                    <a href="https://github.com/ANKITy102/Hackofiesta" className="icon1 icon--github">
                        <i className="ri-github-line"></i>
                    </a>
                </div> 
    </footer>
  )
}

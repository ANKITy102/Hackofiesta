import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer>
        <img className='footer--logo' src="src\assets\images\footer_logo.png" alt="white_PDetect_logo" />       
        <div className="footer--parts">
            <div className="footer--part1">
                The sun shone brightly in the cloudless sky as I walked along the dirt path that wound its way through the lush green forest. Birds chirped happily in the trees above, and a gentle breeze rustled the leaves. 
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
                    <a href="https://t.co/VBNNTjtw3F" className="icon1 icon--instagram">
                        <i className="ri-instagram-line"></i>
                    </a>
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

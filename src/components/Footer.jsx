import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
      <footer className="hero">
        <div className="container flex">
            <div className="container__about">
                <h2>About</h2>
                <p>A young software developer, starting his professional life, learning the most used languages in this
                    industry, PYTHON, C++, HTML, CSS and JAVASCRIPT.</p>
            </div>
            <div className="container-pages flex">

                <div className="container__recentpages">
                    <h2>Recient Pages</h2>
                    <ul>
                        <li><a href="https://brayancountries.netlify.app">Countries</a></li>
                        <li><a href="https://portfolio-brayan.netlify.app/">Portfolio</a></li>
                        <li><a href="https://cartagena-cooks.netlify.app/">Cartagena-cooks</a></li>
                        <li><a href="https://work-company.netlify.app/">Work-company</a></li>
                    </ul>
                </div>
                <div className="container__more">
                    <h2>Recient Pages</h2>
                    <ul>
                        <li><a href="https://challenge2-bom.netlify.app/">Challenge2</a></li>
                        <li><a href="https://challenge3-brayanom.netlify.app/">Challenge3</a></li>
                        <li><a href="https://dev4-brayanom.netlify.app/">Challenge4</a></li>
                        <li><a href="https://cv-brayanom.netlify.app/">Curriculum</a></li>
                        <li><a href="https://mentor1-brayanom.netlify.app/">Mentor1</a></li>
                    </ul>

                </div>
            </div>
        </div>
        <div className="line__separete"></div>
        <div className="by flex">
            <p>Copyright © 2022 All Rights Reserved by Brayan Ospina.</p>
            <div className="icons">
                <a href="https://t.co/VBNNTjtw3F" className="icon1 icon--instagram">
                    <i className="ri-instagram-line"></i>
                </a>
                <a href="#" className="icon1 icon--twitter">
                    <i className="ri-twitter-line"></i>
                </a>
                <a href="linkedin.com/in/brayan-ospina-8bb472243" className="icon1 icon--linkedin">
                    <i className="ri-linkedin-line"></i>
                </a>
                <a href="https://github.com/brayanospina2005/final-project" className="icon1 icon--github">
                    <i className="ri-github-line"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

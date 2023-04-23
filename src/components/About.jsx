import React from "react";
import "./About.css";
import AboutMe from "./AboutMe";

export default function About() {
  return (
    <div className="about" id="About">
      <h1>Our Team</h1>
      <div className="col">
        <AboutMe
          key="1"
          src="src\assets\images\anurag.png"
          name="Anurag Pindiproli"
          dis="Machine Learning and Backend developer of our team giving the brain to this innovative project."
        />
        <AboutMe
          key="2"
          src="src\assets\images\ankit.png"
          name="Ankit Yadav"
          dis="Full Stack web developer with amazing skills and knowledge giving the structure to this project."
        />
      </div>
      <div className="col">
        <AboutMe
          key="3"
          src="src\assets\images\shubham.png"
          name="Shubham Roy"
          dis="Front-end developer and Designer showing his hardwork and dedication in shaping this project."
        />
        <AboutMe
          key="4"
          src="src\assets\images\mayank_sexy.png"
          name="Mayank Rawat"
          dis="UI/UX Designer giving framework to this amazing and to this attractive interface. "
        />
      </div>
      <img
        className="about--img1"
        src="src\assets\images\white_brain.png"
        alt=""
      />
      <img
        className="about--img2"
        src="src\assets\images\white_brain.png"
        alt=""
      />
    </div>
  );
}

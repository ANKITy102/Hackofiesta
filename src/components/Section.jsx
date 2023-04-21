import React from 'react'
import "./Section.css"

export default function Section() {
  return (
    <div className="main_section">
      <div className="leftSection">
        <span className="leftSection_head">PDetect</span>
        <p>Our revolutionary voice-based Parkinson's disease detection system allows patients to take a simple test from the comfort of their own home. Using advanced machine learning algorithms, our system analyzes the patient's voice and extracts over 20 unique features to accurately diagnose Parkinson's disease. The test takes just a few minutes and the results are delivered instantly, providing patients with peace of mind and allowing them to seek medical attention sooner.Try our voice-based Parkinson's disease detection system today and take control of your health.</p>
      </div>
      <div className="rightSection"></div>
    </div>
  )
}

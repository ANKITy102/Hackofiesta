import React from 'react'
import "./TakingTest.css"

export default function TakingTest() {
  return (
    <div className="Test">
        <div className="instruction">
            <h2><i class="fa-solid fa-circle-exclamation"></i> Instructions</h2>
            <div className="para">
                <p><span>1. </span> While recording the audio keep the mic at about 8 cm away from your mouth.</p>
                <p><span>2. </span> Pronounce the vowel /&alpha;/ or  'aa' using a single breath for a maximum of 10 seconds duration while keeping the intensity as stable as possible.</p>
                <p><span>3. </span> To get more accurate results  take test 3 times.</p>
            </div>
        </div>
        <div className="audiopart">
            <button>Get Result</button>
        </div>
    </div>
  )
}

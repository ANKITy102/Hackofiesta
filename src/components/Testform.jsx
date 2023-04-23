import React, { useEffect } from "react";
import "./Testform.css";

import { Link } from "react-router-dom";
export default function Testform() {
  return (
    <div className="testform">
      <input className="Name" type="text" placeholder="Name" />
      <div className="Gender">
        <span>Gender</span>
        <div className="sex">
          <label htmlFor="male">
            <input type="radio" id="male" value="Male" name="sex" /> Male
          </label>
          <label htmlFor="female">
            <input type="radio" id="female" value="Female" name="sex" /> Female
          </label>
          <label htmlFor="others">
            <input type="radio" id="others" value="Others" name="sex" /> Others
          </label>
        </div>
      </div>
      <input className="Age" type="number" max="125" placeholder="Age" />
      <button>Start Test</button>
    </div>
  );
}

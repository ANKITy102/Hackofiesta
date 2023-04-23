import React from "react";
import "./Testform.css";
import { Link } from "react-router-dom";
export default function Testform() {
  return (
    <div className="testform">
      <input className="Name" type="text" placeholder="Name"/>
      <div className="Gender">
        <span>Gender</span>
        <div className="sex">
          <label for="male" ><input type="radio" id="male" value="Male" name="sex"/> Male</label>
          <label for="female" ><input type="radio" id="female" value="Female" name="sex"/> Female</label>
          <label for="others" ><input type="radio" id="others" value="Others" name="sex"/> Others</label>
        </div>
      </div>
      <input className="Age" type="number" max="125" placeholder="Age"/>
      <button>Start Test</button>
    </div>
  );
}

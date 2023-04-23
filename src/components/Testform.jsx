import React from "react";
import "./Testform.css";
// import "./Background.css";
import { Link } from "react-router-dom";
export default function Testform() {
  return (
    <div className="testFormContainer">
      <div className="testFormName">
        <input type="text" placeholder="Name" />
      </div>
      <div className="testFormGender">
        <div className="testFormGender1">Gender</div>
        <div className="genderRadioButton">
          <span>
            <label class="rad-label">
              <input type="radio" class="rad-input" name="rad" />
              <div class="rad-design"></div>
              <div class="rad-text">Male</div>
            </label>
          </span>
          <span>
            <label class="rad-label">
              <input type="radio" class="rad-input" name="rad" />
              <div class="rad-design"></div>
              <div class="rad-text">Female</div>
            </label>
          </span>
          <span>
            <label class="rad-label">
              <input type="radio" class="rad-input" name="rad" />
              <div class="rad-design"></div>
              <div class="rad-text">Other</div>
            </label>
          </span>
        </div>
        {/* <hr /> */}
      </div>
      <div className="testFormAge">
        <input type="text" placeholder="Age" />
      </div>
      <div className="testFormButton">
        <button>Start Test</button>
      </div>
    </div>
  );
}

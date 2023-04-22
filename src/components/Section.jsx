import React from "react";
import "./Section.css";
import { Link } from "react-router-dom";

export default function Section() {
  return (
    <div className="main_section">
      <div className="leftSection">
        <span className="leftSection_head">PDetect</span>
        <p>
          Discover the power of our revolutionary voice-based Parkinson's
          disease detection system! With just a simple test from the comfort of
          your own home, our advanced machine learning algorithms analyze over
          20 unique features of your voice to accurately diagnose Parkinson's
          disease. And the best part? Our system delivers instant results. Your
          PDetect result is one step away
        </p>{" "}
      </div>
      <div className="rightSection">
        <Link className="custom-btn btn-11" to="/Test">
          Take Test <div className="dot"></div>
        </Link>
      </div>
    </div>
  );
}

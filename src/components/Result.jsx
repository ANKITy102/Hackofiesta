import React from "react";
import "./Result.css";

export default function Result(props) {
  let ans = Number(props.g9) ? (
    <span className="red">Positive</span>
  ) : (
    <span className="green">Negative</span>
  );
  return (
    <div className="result">
      <img
        className="result_logo"
        src="src\assets\images\footer_logo.png"
        alt=""
      />
      <h1>Result</h1>
      <div className="result--info">
        <p>Name: Anurag</p>
        <p>Gender: male</p>
        <p>Age: 17</p>
      </div>
      <h2>Final Report : You've been tested {ans}</h2>
      <div className="result--data">
        <div className="col">
          <div className="rep">Jitter_DDP: {props.g1}</div>
          <div className="rep">MDVP_Fhi(Hz):{props.g2}</div>
          <div className="rep">MDVP_Flo(Hz):{props.g3} </div>
          <div className="rep">MDVP_Fo(Hz): {props.g4} </div>
        </div>
        <div className="col">
          <div className="rep"> MDVP_Jitter(%): {props.g5}</div>
          <div className="rep"> MDVP_Jitter(Abs): {props.g6}</div>
          <div className="rep"> MDVP_PPQ: {props.g7}</div>
          <div className="rep">MDVP_RAP: {props.g8} </div>
        </div>
      </div>
      <button className="result--download">Download</button>
      <img
        className="result_logo_background"
        src="src\assets\images\result_logo_background.png"
        alt=""
      />
    </div>
  );
}

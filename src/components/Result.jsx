import React from 'react'
import "./Result.css"

export default function Result(prop) {
  let ans = (Number(prop.result)) ? <span className="red">Positive</span> : <span className="green">Negative</span>;
  return (
    <div className="result">
      <img className="result_logo" src="src\assets\images\footer_logo.png" alt="" />
      <h1>Result</h1>
      <div className="result--info">
        <p>Name: {prop.uname}</p>
        <p>Gender: {prop.ugender}</p>
        <p>Age: {prop.uage}</p>
      </div>
      <h2>Final Report :  You've been tested {ans}</h2>
      <div className="result--data">
        <div className="col">
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
        </div>
        <div className="col">
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
          <div className="rep">1. unfiabhakjhbkh = {prop.val}</div>
        </div>
      </div>
      <button className="result--download">Download</button>
      {/* <img className="result_logo_background" src="src\assets\images\result_logo_background.png" alt="" /> */}
    </div>
  )
}

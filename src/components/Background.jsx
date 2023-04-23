import React from "react";
import "./Background.css";
import { Link } from "react-router-dom";

export default function Background() {
  return (
    <>
      <div className="background1" id="Background">
        <div className="bg1--e1">
          <img
            className="bg1--e1--p1"
            src="src\assets\images\bg1_img.png"
            alt=""
          />
          <div className="bg1--e1--speach">
            <h1>Background</h1>
            <span>
              Parkinson's disease (PD), or simply Parkinson's, is a chronic
              degenerative disorder of the central nervous system that mainly
              affects the motor system. The symptoms usually emerge slowly, and
              as the disease worsens, non-motor symptoms become more common.
              Early symptoms are tremor, slowness of movement, and difficulty
              with walking. Cognitive and behavioral problems may occur with
              depression and anxiety.
            </span>
          </div>
        </div>
        <div className="bg1--e2">
          <h2>SPEECH FEATURES</h2>
          <span>
            Speech is a strong indicator of Parkinson's Disease, as almost every
            patient experiences severe vocal degradation. Therefore, speech
            features can be used to diagnose the disease. Our model extracts 22
            speech features from the voice sample and tests for Parkinson's
          </span>
        </div>
        <img
          className="bg--img1"
          src="src\assets\images\white_brain.png"
          alt=""
        />
        <img
          className="bg--img2"
          src="src\assets\images\white_brain.png"
          alt=""
        />
      </div>
      <div className="background2">
        <h1>Traditional Problem</h1>
        <div className="bg2--e1">
          <div className="bg2--e1--speach">
            With the growing number of the aged population, the number of
            Parkinson's disease (PD) affected people is also mounting.
            Unfortunately, due to insufficient resources and awareness in
            underdeveloped countries, proper and timely PD detection is highly
            challenged. Besides, all PD patients’ symptoms are neither the same
            nor they all become pronounced at the same stage of the illness.
          </div>
          <img
            className="bg2--e1--p2"
            src="src\assets\images\bg2_img.png"
            alt=""
          />
        </div>
        <div className="bg2--e2">
          <h2>Technology's Solution</h2>
          <span>
            This work aims to combine more than one feature by collecting data
            remotely using smartphones and detect PD with the help of a
            cloud-based machine learning system for telemonitoring the PD
            patients in the developing countries.
          </span>
        </div>
        <Link className="bg--custom-btn bg--btn-11" to="/Test">
          Take Test <div class="dot"></div>
        </Link>
        <img
          className="bg--img1"
          src="src\assets\images\purple_brain.png"
          alt=""
        />
        <img
          className="bg--img2"
          src="src\assets\images\purple_brain.png"
          alt=""
        />
      </div>
    </>
  );
}

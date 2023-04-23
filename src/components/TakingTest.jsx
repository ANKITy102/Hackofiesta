import React, { useEffect, useState, useRef } from "react";
// import { useHistory } from "react-router-dom";
import "./TakingTest.css";
import "./MyForm.css";
import "./Result.css";
import { Link } from "react-router-dom";
import imgg from "../assets/audiogif.gif";
const mimeType = "audio/mpeg";
export default function TakingTest(props) {
  useEffect(() => {
    // Do something when the component is mounted or updated
    document.getElementById("testformBig").style.display = "none";
    document.body.style.height = "normal";
    document.body.style.overflowY = "auto";
  }, []);
  const [show, setShow] = useState(0);
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const [file, setFile] = useState(null);
  const [reccordeddBob, setRecordedBlob] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(reccordeddBob);
    let formData = new FormData();
    formData.append("files", reccordeddBob);
    let outcome = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: formData,
    });
    // console.log(out)
    // let ;
    // console.log("hello2");
    // console.log(response);
    // console.log("hello3");

    // let outcome = await fetch("http://localhost:5000/predict");
    let data = await outcome.json();

    // console.log(data.Jitter_DDP);
    const r1 = data.Jitter_DDP;
    const r2 = data.MDVP_PPQ;
    const r3 = data.MDVP_RAP;
    const r4 = data.MDVP_Jitter;
    const r5 = data.MDVP_Jitter12;
    const r6 = data.MDVP_Flo;
    const r7 = data.Fhi;
    const r8 = data.MDVP_Fo;
    const r9 = data.result;
    props.setTestData(r1, r2, r3, r4, r5, r6, r7, r8, r9);
    document.getElementById("takeToResult").click();
    // const history = useHistory();
    // history.push("/Result");
  };
  const startRecording = async () => {
    setAudio(null);
    setShow(1);
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert("Give persmission to microphone from settings", err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
    setRecordingStatus("recording");
    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { type: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };
  const stopRecording = () => {
    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      setShow(0);
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);
      setRecordedBlob(audioBlob);
      setFile(audioUrl);
      // const filePath = "temp.mpeg";
      // saveAs(audioBlob, "temp.mpeg");
    };
  };

  return (
    <div className="Test">
      <div className="instruction">
        <h2>
          <i className="fa-solid fa-circle-exclamation"></i> Instructions
        </h2>
        <div className="para">
          <p>
            <span>1. </span> While recording the audio keep the mic at about 8
            cm away from your mouth.
          </p>
          <p>
            <span>2. </span> Pronounce the vowel /&alpha;/ or 'aa' using a
            single breath for a maximum of 10 seconds duration while keeping the
            intensity as stable as possible.
          </p>
          <p>
            <span>3. </span> To get best accurate results take the test best of
            three.
          </p>
        </div>
      </div>

      <div className="audiopart">
        <div
          className="audioVisualizer"
          style={{
            width: "75%",
            height: "46%",
            display: "flex",
            paddingLeft: "100px",
          }}
        >
          {show ? (
            <img
              src={imgg}
              alt=""
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          ) : null}
        </div>
        <div className="dkjfd">
          {audio ? (
            <div key={audio} className="AudioStyle">
              <div className="container-audio">
                <audio controls loop autoPlay>
                  <source src={audio} type="audio/webm" />
                  Your browser dose not Support the audio Tag
                </audio>
              </div>
            </div>
          ) : (
            <div key={null} className="AudioStyle">
              <div className="container-audio">
                <audio controls loop autoPlay>
                  <source src={audio} type="audio/webm" />
                  Your browser dose not Support the audio Tag
                </audio>
              </div>
            </div>
          )}
        </div>
        <div className="audiokkdjlkdf" style={{ marginTop: "30px" }}>
          <div
            className="butttondjdk"
            style={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "poppins",
              fontSize: "16px",
              cursor: "pointer",
              background: "#d4b5f5",
              padding: "5px 10px",
              borderRadius: "8px",
            }}
            onClick={startRecording}
          >
            <i
              className="fa-solid fa-play"
              style={{ color: "red", marginRight: "5px" }}
            ></i>{" "}
            Start Recording
          </div>
          <div
            className="butttondjdk"
            style={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "poppins",
              fontSize: "16px",
              cursor: "pointer",
              background: "#d4b5f5",
              padding: "5px 10px",
              borderRadius: "8px",
            }}
            onClick={stopRecording}
          >
            <i
              className="fa-solid fa-pause"
              style={{ color: "green", marginRight: "5px" }}
            ></i>{" "}
            Pause Recording
          </div>
        </div>
        <button
          onClick={handleSubmit}
          style={{
            cursor: "pointer",
          }}
        >
          Get Result
        </button>
      </div>
      <Link
        to="/Result"
        style={{
          position: "fixed",
          opacity: "0",
        }}
        id="takeToResult"
      >
        Result
      </Link>
    </div>
  );
}

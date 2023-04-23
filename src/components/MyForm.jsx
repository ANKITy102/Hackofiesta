import { useState, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { saveAs } from "file-saver";
import "./MyForm.css";
const mimeType = "audio/mpeg";
const AudioRecorder = () => {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const [file, setFile] = useState(null);
  const [reccordeddBob, setRecordedBlob] = useState(null);
  const handleSubmit = async (event) => {
    // console.log(file);
    // if (file === null) {
    //   return;
    // }

    let formData = new FormData();
    formData.append("files", reccordeddBob);
    let outcome = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: formData,
      mode: "no-cors",
    });
    // console.log(out)
    let response = await outcome.json();
    console.log(response);
    // let outcome = await fetch("http://localhost:5000/predict");
    // let data = await outcome.json();
    // console.log(data);
  };
  const startRecording = async () => {
    setAudio(null);
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
  function makeid(length) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let id = "";
    for (let i = 0; i < length; i++) {}
  }
  // const handleSubmit=()=>{
  //     const audioInput = document.getElementById("audio-input");
  //     audioInput.value = audioSrc;

  //     const audioForm = document.getElementById("audio-form");
  //     audioForm.submit();
  // }
  return (
    <>
      <div className="audio-controls">
        {/* {!permission ? (
          <button onClick={getMicrophonePermission} type="button">
          Get Microphone
          </button>
        ) : null} */}
        <div className="sideAudioCont">
          <div className="audioCenter">
            {recordingStatus === "inactive" ? (
              <>
                <button
                  onClick={startRecording}
                  type="button"
                  className="custom-btn btn-11"
                >
                  Start Recording
                </button>
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="custom-btn btn-11"
                >
                  Test
                </button>
              </>
            ) : null}
            {recordingStatus === "recording" ? (
              <>
                <button
                  onClick={stopRecording}
                  type="button"
                  className="custom-btn btn-11"
                >
                  Stop Recording
                </button>
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="custom-btn btn-11"
                >
                  Test
                </button>
              </>
            ) : null}
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
        </div>
        <div className="leftAudioCont"></div>
      </div>
    </>
  );
};
// <div className="audio-container">
{
  /* <audio src={audio} controls></audio>
<a download href={audio}>
    Download Recording
</a>
</div> */
}
export default AudioRecorder;

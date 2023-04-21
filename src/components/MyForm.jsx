// import { useState } from "react";
// import "./MyForm.css"
// // import "./vrecorder"


// export default function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div id="div1">
//         <label>Enter your name:
//         <input 
//           type="text" 
//           name="username" 
//           value={inputs.username || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <label>Enter your age:
//           <input 
//             type="number" 
//             name="age" 
//             value={inputs.age || ""} 
//             onChange={handleChange}
//           />
//           </label>
//         </div>
//         <div id="div2">
//           <div className="container">
//               <div className="display">

//               </div>

//               <div className="controllers">

//               </div>
//           </div>
//           <div className="form">
//             <input type="file" name="audio" />
//             <input type="submit" value="Predict" />
//           </div>
//         </div>
//         <input type="submit" />
//     </form>
//   )
// }

import { useState, useRef } from "react";
import "./MyForm.css"
const mimeType = "audio/webm";
const AudioRecorder = () => {

    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [audio, setAudio] = useState(null);
    // const getMicrophonePermission = async () => {
    //     if ("MediaRecorder" in window) {
    //         try {
    //             const streamData = await navigator.mediaDevices.getUserMedia({
    //                 audio: true,
    //                 video: false,
    //             });
    //             setPermission(true);
    //             setStream(streamData);
    //         } catch (err) {
    //             alert(err.message);
    //         }
    //     } else {
    //         alert("The MediaRecorder API is not supported in your browser.");
    //     }
    // };
    const startRecording = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err) {
                alert(err.message);
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
      };
    };
    return (
      <>
      <div className="audio-controls">
      {/* {!permission ? (
      <button onClick={getMicrophonePermission} type="button">
          Get Microphone
      </button>
      ) : null} */}
      { recordingStatus === "inactive" ? (
      <button onClick={startRecording} type="button" className="btnStartRecording">
          Start Recording
      </button>
      ) : null}
      {recordingStatus === "recording" ? (
      <button onClick={stopRecording} type="button" className="btnStopRecording">
          Stop Recording
      </button>
      ) : null}
  </div>
  {audio ? (
  <div className="audio-container">
     <audio src={audio} controls></audio>
     <a download href={audio}>
        Download Recording
     </a>
   </div>
) : null}
  </>
    );
};
export default AudioRecorder;
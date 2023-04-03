import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { BrowserBarcodeReader } from "@zxing/library";

function App() {
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const codeReader = new BrowserBarcodeReader();
    console.log("ZXing code reader initialized");

    codeReader
      .getVideoInputDevices()
      .then((videoInputDevices) => {
        setSelectedDeviceId(videoInputDevices[0].deviceId);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSourceChange = (event) => {
    setSelectedDeviceId(event.target.value);
  };

  const handleStart = () => {
    const codeReader = new BrowserBarcodeReader();
    codeReader.decodeFromVideoDevice(
      selectedDeviceId,
      videoRef.current,
      (result, error) => {
        if (result) {
          console.log(result);
          document.getElementById("result").textContent = result.getText();
        }
        if (error && error.constructor.name !== "NoVideoInputDevicesError") {
          // console.error(error);
          document.getElementById("result").textContent = error;
        }
      }
    );

    console.log(
      `Started continuous decode from camera with id ${selectedDeviceId}`
    );
  };

  const handleReset = () => {
    document.getElementById("result").textContent = "";
    const codeReader = new BrowserBarcodeReader();
    codeReader.reset();
    console.log("Reset.");
  };

  return (
    <div>
      <div id="sourceSelectPanel" style={{ display: "none" }}>
        <select id="sourceSelect" onChange={handleSourceChange}></select>
      </div>
      <button id="startButton" onClick={handleStart}>
        Start
      </button>
      <button id="resetButton" onClick={handleReset}>
        Reset
      </button>
      <div id="result"></div>
      <video ref={videoRef} style={{ display: "block" }} autoPlay></video>
    </div>
  );
}

export default App;

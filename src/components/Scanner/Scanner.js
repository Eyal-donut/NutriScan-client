import React, { useEffect, useState, useRef } from "react";
import { BrowserBarcodeReader } from "@zxing/library";
import classes from "./Scanner.module.css";

const Scanner = ({ onBarcodeScan }) => {
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const [scannedBarcode, setScannedBarcode] = useState("");
  const videoRef = useRef(null);

  const initBarcodeReader = () => {
    const codeReader = new BrowserBarcodeReader(10);
    codeReader
      .getVideoInputDevices()
      .then((videoInputDevices) => {
        const backCamera = videoInputDevices.find((device) =>
          device.label.includes("back")
        );
        if (backCamera) {
          setSelectedDeviceId(backCamera.deviceId);
        } else {
          const backCamera = videoInputDevices.find(
            (device) => device.facingMode === "environment"
          );
          if (backCamera) {
            setSelectedDeviceId(backCamera.deviceId);
          } else {
            setSelectedDeviceId(videoInputDevices[0].deviceId);
          }
        }
      })
      .catch((err) => {
        console.error("Error finding a video device");
        console.error(err);
      })
      .then(() => {
        codeReader.decodeFromVideoDevice(
          selectedDeviceId,
          videoRef.current,
          (result, error) => {
            if (result) {
              setScannedBarcode(result.text);
            }
            if (
              error &&
              error.constructor.name !== "NoVideoInputDevicesError" &&
              error.constructor.name !== "NotFoundException"
            ) {
              console.error(error);
            }
          }
        );
      });
  };

  useEffect(() => {
    initBarcodeReader();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    onBarcodeScan(scannedBarcode);

    return () => {
      setScannedBarcode("");
    };
  }, [scannedBarcode, onBarcodeScan]);

  return (
    <div>
      <div className={classes.scanTarget}>
        <div className={classes.leftside}></div>
        <div className={classes.rightside}></div>
      </div>
      <video ref={videoRef} className={classes.scanner} autoPlay></video>
      <p>{scannedBarcode}</p>
    </div>
  );
};

export default Scanner;

// import React, { useEffect, useState, useRef } from "react";
// import { BrowserBarcodeReader } from "@zxing/library";
// import { Quagga } from "quagga";
// import classes from "./Scanner.module.css";

// const Scanner = ({ onBarcodeScan }) => {
//   const [selectedDeviceId, setSelectedDeviceId] = useState(null);
//   const [scannedBarcode, setScannedBarcode] = useState("");
//   const videoRef = useRef(null);

//   const initBarcodeReader = () => {
//     const codeReader = new BrowserBarcodeReader(10);
//     codeReader
//       .getVideoInputDevices()
//       .then((videoInputDevices) => {
//         const backCamera = videoInputDevices.find((device) =>
//           device.label.includes("back")
//         );
//         if (backCamera) {
//           setSelectedDeviceId(backCamera.deviceId);
//         } else {
//           const backCamera = videoInputDevices.find(
//             (device) => device.facingMode === "environment"
//           );
//           if (backCamera) {
//             setSelectedDeviceId(backCamera.deviceId);
//           } else {
//             setSelectedDeviceId(videoInputDevices[0].deviceId);
//           }
//         }
//       })
//       .catch((err) => {
//         console.error("Error finding a video device");
//         console.error(err);
//       })
//       .then(() => {
//         codeReader.decodeFromVideoDevice(
//           selectedDeviceId,
//           videoRef.current,
//           (result, error) => {
//             if (result) {
//               setScannedBarcode(result.text);
//             }
//             if (
//               error &&
//               error.constructor.name !== "NoVideoInputDevicesError" &&
//               error.constructor.name !== "NotFoundException"
//             ) {
//               console.error(error);
//             }
//           }
//         );
//       });
//   };

//   useEffect(() => {
//     initBarcodeReader();
//     // eslint-disable-next-line
//   }, []);

//   useEffect(() => {
//     onBarcodeScan(scannedBarcode);

//     return () => {
//       setScannedBarcode("");
//     };
//   }, [scannedBarcode, onBarcodeScan]);

//   return (
//     <div>
//       <div className={classes.scanTarget}>
//         <div className={classes.leftside}></div>
//         <div className={classes.rightside}></div>
//       </div>
//       <video ref={videoRef} className={classes.scanner} autoPlay></video>
//       <p>{scannedBarcode}</p>
//     </div>
//   );
// };

// export default Scanner;

import React, { useEffect, useState } from "react";
import config from "./config.json";
import classes from "./Scanner.module.css";
import Quagga from "@ericblade/quagga2";

const Scanner = ({ onDetectedBarcode }) => {
  const [result, setResult] = useState("")

  useEffect(() => {
    Quagga.init(config, (err) => {
      if (err) {
        console.log(err, "error msg");
      }
      Quagga.start();
      return () => {
        Quagga.stop();
      };
    });

    //detecting boxes on stream
    Quagga.onProcessed((result) => {
      var drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute("width")),
            Number(drawingCanvas.getAttribute("height"))
          );
          result.boxes
            .filter(function (box) {
              return box !== result.box;
            })
            .forEach(function (box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "green",
                lineWidth: 2,
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "#00F",
            lineWidth: 2,
          });
        }
      }
    });

    Quagga.onDetected(detected);
    // eslint-disable-next-line
  }, []);

  const detected = (result) => {
    console.log(result.codeResult.code);
    console.log(typeof result.codeResult.code);
    setResult(result.codeResult.code)
    onDetectedBarcode(result.codeResult.code);
  };

  return (
    <>
      <div id="interactive" className={`viewport ${classes.scanner}`} />
      <div className={classes.scanTarget}>
        <div className={classes.leftside}></div>
        <div className={classes.rightside}></div>
      </div>
      <div>result: {result}</div>
    </>
  );
};

export default Scanner;

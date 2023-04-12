import React, { useEffect, useState } from "react";
import config from "./config.json";
import classes from "./Scanner.module.css";
import Quagga from "@ericblade/quagga2";

const Scanner = ({ onDetectedBarcode }) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    Quagga.init(config, (err) => {
      if (err) {
        console.log(err, "error msg");
      }
      Quagga.start();
      return () => {
        Quagga.offProcessed();
        Quagga.offDetected();
        Quagga.stop();
        console.log("unmounted");
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

        // if (result.box) {
        //   Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
        //     color: "#00F",
        //     lineWidth: 2,
        //   });
        // }
      }
    });

    Quagga.onDetected(detected);
    // eslint-disable-next-line
  }, []);

  const detected = (result) => {
    Quagga.offProcessed();
    Quagga.offDetected();
    Quagga.stop();
    setResult(result.codeResult.code);
    onDetectedBarcode(result.codeResult.code);
  };

  return (
    <>
      <div id="interactive" className={`viewport ${classes.scanner}`} />
      <div className={classes.scanTarget}>
        <div className={classes.scanLogo} />
        <div className={classes.leftside}></div>
        <div className={classes.rightside}></div>
      </div>
      <div>result: {result}</div>
    </>
  );
};

export default Scanner;

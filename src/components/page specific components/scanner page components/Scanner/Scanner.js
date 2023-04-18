import React, { useEffect, useState } from "react";
import config from "./config.json";
import classes from "./Scanner.module.css";
import Quagga from "@ericblade/quagga2";
import { useCameraContext } from "../../../../context/CameraContext";

const Scanner = ({ onDetectedBarcode }) => {
  const [result, setResult] = useState("");
  const {setIsCameraOn} = useCameraContext()

  useEffect(() => {
    Quagga.init(config, () => {
      
      Quagga.start();
      setIsCameraOn(true)
    });

    Quagga.onDetected(detected);

    return () => {
      Quagga.stop();
      
    };
    // eslint-disable-next-line
  }, []);

  const detected = async(result) => {
    await Quagga.stop();
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


import React, { useEffect } from "react";
import config from "./config.json";
import classes from "./Scanner.module.css";
import Quagga from "@ericblade/quagga2";
import { useCameraContext } from "../../../../context/CameraContext";
import Logo from "../../../global components/Logo/Logo";

const Scanner = ({ onDetectedBarcode }) => {
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
    onDetectedBarcode(result.codeResult.code);
  };

  return (
    <>
      <div id="interactive" className={`viewport ${classes.scanner}`} />
      <div className={classes.scanTarget}>
      <Logo className={classes.logo} sizeInRem="6rem"/>
        {/* <div className={classes.scanLogo} /> */}
        <div className={classes.leftside}></div>
        <div className={classes.rightside}></div>
      </div>
    </>
  );
};

export default Scanner;


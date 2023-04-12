import { useState, createContext, useContext } from "react";

const CameraContext = createContext();

const CameraProvider = ({ children }) => {
  const [isCameraOn, setIsCameraOn] = useState(false);

  return (
    <CameraContext.Provider
      value={{
        isCameraOn,
        setIsCameraOn,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
};

export const useCameraContext = () => {
  return useContext(CameraContext)
}

export {CameraProvider}
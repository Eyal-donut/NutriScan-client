import { useCameraContext } from "../context/CameraContext";

export const useCheckCameraAndRefresh = () => {
  const { isCameraOn } = useCameraContext();
  const checkCameraAndRefresh = () => {
    if (isCameraOn) {
      window.location.reload();
    }
  };
  return { checkCameraAndRefresh };
};

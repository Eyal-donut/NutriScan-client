import { useEffect } from "react";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";

const ProfilePage = () => {
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();

  useEffect(() => {
    checkCameraAndRefresh();
    // eslint-disable-next-line
  }, []);
  
  return <h1>Profile Page</h1>;
};
export default ProfilePage;

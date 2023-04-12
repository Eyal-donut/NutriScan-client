import { useEffect } from "react";
// import { getProduct } from "../../API/productsApi";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";

const MyScansPage = () => {
  const {checkCameraAndRefresh} = useCheckCameraAndRefresh()
  
  useEffect(() => {
    checkCameraAndRefresh()
    
    // eslint-disable-next-line
  }, []);

  return <h1>My Scans Page</h1>;
};
export default MyScansPage;

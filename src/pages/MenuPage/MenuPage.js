import { useEffect } from "react";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";

const MenuPage = () => {
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();

  useEffect(() => {
    checkCameraAndRefresh();

    // eslint-disable-next-line
  }, []);
  return <h1>Menu Page</h1>;
};
export default MenuPage;

import { useEffect, useState } from "react";
// import { getProduct } from "../../API/productsApi";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import ProductCardMyScans from "../../components/ProductCard/ProductCardMyScans/ProductCardMyScans";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const MyScansPage = () => {
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const { getItemProperty } = useLocalStorage();

  const [myScans, setMyScans] = useState(() =>
    getItemProperty("loggedUser", "products")
  );

  const handleDelete = () => {
    setMyScans(getItemProperty("loggedUser", "products"))
  }

  useEffect(() => {
    checkCameraAndRefresh()

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {myScans.map((scan) => {
        return <ProductCardMyScans product={scan} page="my-scans" key={scan.code} onDelete={handleDelete}/>;
      })}
    </>
  );
};
export default MyScansPage;

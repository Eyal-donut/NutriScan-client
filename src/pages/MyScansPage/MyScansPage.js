import { useEffect, useState } from "react";
// import { getProduct } from "../../API/productsApi";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import ProductCardMyScans from "../../components/ProductCard/ProductCardMyScans/ProductCardMyScans";
import { useBarcodeAndProduct } from "../../hooks/useBarcodeAndProduct";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const MyScansPage = () => {
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const { getProductFromLocalAndSetStates } = useBarcodeAndProduct();
  const { getLocalStorageItem, getItemProperty } = useLocalStorage();
  const localProduct = getLocalStorageItem("currentProduct");

  const [myScans, setMyScans] = useState(() =>
    getItemProperty("loggedUser", "products")
  );

  useEffect(() => {
    // checkCameraAndRefresh()
    console.log(myScans);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {myScans.map((scan) => {
        return <ProductCardMyScans product={scan} page="my-scans" key={scan.code}/>;
      })}
    </>
  );
};
export default MyScansPage;

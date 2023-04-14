import { useEffect } from "react";
// import { getProduct } from "../../API/productsApi";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import ProductCardMyScans from "../../components/ProductCard/ProductCardMyScans/ProductCardMyScans";
import { useBarcodeAndProduct } from "../../hooks/useBarcodeAndProduct";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const MyScansPage = () => {
  const {checkCameraAndRefresh} = useCheckCameraAndRefresh()
  const {getProductFromLocalAndSetStates} = useBarcodeAndProduct()
  const {getLocalStorageItem} = useLocalStorage()
  const localProduct = getLocalStorageItem("currentProduct")
  useEffect(() => {
    // checkCameraAndRefresh()
      getProductFromLocalAndSetStates();
  
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ProductCardMyScans product={localProduct} page="my-scans"/>
    </>
  )
};
export default MyScansPage;

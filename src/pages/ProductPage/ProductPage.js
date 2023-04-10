import { useEffect } from "react";
import { getProduct } from "../../API/productsApi";

const ProductPage = () => {

  useEffect(() => {
    getProduct(7290000072753);
  }, []);

  return <h1>Product Page</h1>;
};
export default ProductPage;

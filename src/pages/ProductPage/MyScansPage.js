import { useEffect } from "react";
import { getProduct } from "../../API/productsApi";

const MyScansPage = () => {
  useEffect(() => {
    getProduct(7290000072753);
  }, []);

  return <h1>My Scans Page</h1>;
};
export default MyScansPage;

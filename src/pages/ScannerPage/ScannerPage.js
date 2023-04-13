import Scanner from "../../components/Scanner/Scanner";
import SpinnerPage from "../SpinnerPage/SpinnerPage";
import { useNavigate } from "react-router-dom";
import { useBarcodeAndProduct } from "../../hooks/useBarcodeAndProduct";
import { useSpinnerContext } from "../../context/SpinnerContext";

const ScannerPage = () => {
  const { getProductAndSetCurrent } = useBarcodeAndProduct();
  const { isLoading, setIsLoading } = useSpinnerContext();
  const navigate = useNavigate();

  const handleDetected = async (barcode) => {
    setIsLoading(true)
    await getProductAndSetCurrent(barcode);
    setIsLoading(false)
    navigate("/product");
  };

  return (
    <>
      {!isLoading && (
        <>
          <h1>Scanner Page</h1>
          <Scanner onDetectedBarcode={handleDetected} />
        </>
      )}
      {isLoading && <SpinnerPage />}
    </>
  );
};
export default ScannerPage;

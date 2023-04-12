import { useNavigate } from "react-router-dom";
import Scanner from "../../components/Scanner/Scanner";
import { useBarcode } from "../../hooks/useBarcode";

const ScannerPage = () => {
  const {getProductAndSetCurrent} = useBarcode()
  const navigate = useNavigate()

  const handleDetected = (barcode) => {
    getProductAndSetCurrent(barcode)
    navigate("/product")
    
  };

  return (
    <>
      <h1>Scanner Page</h1>
       <Scanner onDetectedBarcode={handleDetected} />
      
    </>
  );
};
export default ScannerPage;

import Scanner from "../../components/Scanner/Scanner";
import {getProduct} from '../../API/productsApi'

const ScannerPage = () => {
  const handleDetected = (barcode) => {
    console.log(barcode);
    getProduct(barcode)
  };
  return (
    <>
      <h1>Scanner Page</h1>
        <Scanner onDetectedBarcode={handleDetected} />
    </>
  );
};
export default ScannerPage;

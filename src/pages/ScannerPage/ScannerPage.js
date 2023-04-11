import Scanner from "../../components/Scanner/Scanner";
// import { useBarcode } from "../../hooks/useBarcode";

const ScannerPage = () => {
  // const {getProductAndSetCurrent} = useBarcode()



  const handleDetected = (barcode) => {
    console.log(barcode);
    // getProductAndSetCurrent(barcode)
  };
  return (
    <>
      <h1>Scanner Page</h1>
        <Scanner onDetectedBarcode={handleDetected} />
    </>
  );
};
export default ScannerPage;

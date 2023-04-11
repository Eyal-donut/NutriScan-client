import Scanner from "../../components/Scanner/Scanner";

const ScannerPage = () => {
  const handleDetected = (barcode) => {
    console.log(barcode);
  };
  return (
    <>
      <h1>Scanner Page</h1>
      <div className="scannerContainer">
        <Scanner onDetectedBarcode={handleDetected} />
      </div>
    </>
  );
};
export default ScannerPage;

import Scanner from "../../components/Scanner/Scanner";

const ScannerPage = () => {

  const handleScan = (barcode) => {
    console.log(barcode);
  };
  return (
    <>
      <h1>Scanner Page</h1>
      <Scanner onBarcodeScan={handleScan} />
    </>
  );
};
export default ScannerPage;

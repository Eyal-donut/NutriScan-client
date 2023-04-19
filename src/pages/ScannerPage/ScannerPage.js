import Scanner from "../../components/page specific components/scanner page components/Scanner/Scanner";
import SpinnerPage from "../SpinnerPage/SpinnerPage";
import classes from './ScannerPage.module.css'
import { useNavigate } from "react-router-dom";
import { useBarcodeAndProduct } from "../../hooks/useBarcodeAndProduct";
import { useSpinnerContext } from "../../context/SpinnerContext";
import { useRef } from "react";

const ScannerPage = () => {
  const { getProductAndSetCurrent } = useBarcodeAndProduct();
  const { isLoading, setIsLoading } = useSpinnerContext();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleDetected = async (barcode) => {
    setIsLoading(true);
    await getProductAndSetCurrent(barcode);
    setIsLoading(false);
    navigate("/product");
  };

  //! Dev only!
  const submitHandler =(e) =>{
    e.preventDefault()
    handleDetected(Number(inputRef.current.value))
  }

  return (
    <div className={classes.wrap}>
      {!isLoading && (
        <>
          <Scanner onDetectedBarcode={handleDetected} />
          <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="type-barcode" className={classes.label}>Type Barcode: </label>
            <input className={classes.input} name="type-barcode" ref={inputRef}></input>
          </form>
        </>
      )}
      {isLoading && <SpinnerPage />}
    </div>
  );
};
export default ScannerPage;

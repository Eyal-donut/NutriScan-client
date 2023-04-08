import { useLoginPageDisplayContext } from "../../context/LoginPageDisplayContext";
import classes from "./Modal.module.css";
import NestedWindow from "./NestedWindow";

const Modal = ({ children }) => {
  const { setIsLoginPageDisplay } = useLoginPageDisplayContext();

  const clickHandler = (e) => {
    if (e.target.id === "screen-cover" || e.target.id === "xBtn") {
      setIsLoginPageDisplay(false);
    }
  };
  return (
    <>
      <div
        className={classes.screenCover}
        onClick={clickHandler}
        id="screen-cover"
      >
        <NestedWindow onXClick={clickHandler}>{children}</NestedWindow>
      </div>
    </>
  );
};
export default Modal;
import { useLoginAndRegisterPagesDisplayContext } from "../../../context/LoginAndRegisterPageContext";
import { useMenuDisplayContext } from "../../../context/loggedUserContext copy";
import classes from "./Modal.module.css";
import NestedWindow from "./NestedWindow";

const Modal = ({ children, className, page }) => {
  const { setIsLoginPageDisplay } = useLoginAndRegisterPagesDisplayContext();
  const {setIsMenuDisplay} = useMenuDisplayContext()

  const clickHandler = (e) => {
    if (e.target.id === "screen-cover" || e.target.id === "xBtn") {
      page === "login" ? setIsLoginPageDisplay(false) : setIsMenuDisplay(false)
    }
  };
  return (
    <>
        <div
          className={`${classes.screenCover} ${className}`}
          onClick={clickHandler}
          id="screen-cover"
        >
          <NestedWindow onXClick={clickHandler}>{children}</NestedWindow>
        </div>
    </>
  );
};
export default Modal;

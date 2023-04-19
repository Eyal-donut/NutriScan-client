import { useLoginAndRegisterPagesDisplayContext } from "../../../context/LoginAndRegisterPageContext";
import { useMenuDisplayContext } from "../../../context/MenuDisplayContext";
import classes from "./Modal.module.css";
import NestedWindow from "./NestedWindow";

const Modal = ({ children, screenCoverClassName, page, windowClassName }) => {
  const { setIsLoginPageDisplay } = useLoginAndRegisterPagesDisplayContext();
  const { setIsMenuDisplay } = useMenuDisplayContext();

  const clickHandler = (e) => {
    if (e.target.id === "screen-cover" || e.target.id === "xBtn") {
      if (page === "login") {
        setIsLoginPageDisplay(false);
      } else {
        setIsMenuDisplay(false);
      }
    }
  };

  return (
    <>
      <div
        className={`${classes.screenCover} ${screenCoverClassName}`}
        onClick={clickHandler}
        id="screen-cover"
      >
        <NestedWindow onXClick={clickHandler} windowClassName={windowClassName}>{children}</NestedWindow>
      </div>
    </>
  );
};
export default Modal;

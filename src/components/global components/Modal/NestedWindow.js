import classes from "./NestedWindow.module.css";

const NestedWindow = ({ children, onXClick, windowClassName }) => {
  const clickHandler = (e) => {
    onXClick(e);
  };
  return (
    <div className={`${classes.wrapper} ${windowClassName}`}>
      <div className={classes.xBtn} onClick={clickHandler} id="xBtn" />
      {children}
    </div>
  );
};
export default NestedWindow;

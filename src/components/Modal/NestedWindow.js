import classes from "./NestedWindow.module.css";

const NestedWindow = ({children}) => {
  return (
      <div className={classes.wrapper}>
        {children}
      </div>
  );
};
export default NestedWindow;

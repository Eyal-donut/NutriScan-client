import classes from "./PageHeader.module.css";

const PageHeader = ({children, className}) => {
  return (
    <div className={`${classes.wrap} ${className}`}>{children}</div>
  );
};

export default PageHeader;

import classes from "./ContentWrap.module.css";

const ContentWrap = ({ children, width, className }) => {
  return (
    <div className={`${classes.contentWrap} ${className}`} style={{ width: `${width}` }}>
      {children}
    </div>
  );
};

export default ContentWrap;

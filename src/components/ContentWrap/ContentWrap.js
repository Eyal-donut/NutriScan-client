import classes from "./ContentWrap.module.css";

const ContentWrap = ({ children, width }) => {
  return (
    <div className={classes.contentWrap} style={{ width: `${width}` }}>
      {children}
    </div>
  );
};

export default ContentWrap;

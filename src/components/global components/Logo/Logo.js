import classes from "./Logo.classes.module.css";

const Logo = ({ sizeInRem }) => {
  return (
    <div
      className={classes.logo}
      style={{ width: `${sizeInRem}`, height: `${sizeInRem}` }}
    ></div>
  );
};

export default Logo;

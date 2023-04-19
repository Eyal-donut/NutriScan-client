import classes from "./Logo.classes.module.css";

const Logo = ({ sizeInRem, className, profilePage }) => {
  return (
    <div
      className={`${
        !profilePage ? classes.logo : classes.logoGrey
      } ${className}`}
      style={{ width: `${sizeInRem}`, height: `${sizeInRem}` }}
    ></div>
  );
};

export default Logo;

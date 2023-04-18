import classes from "./Icon.module.css";

const Icon = ({ imageUrl, onBtnClick, className }) => {
  return (
    <div
      className={`${classes.icon} ${className}`}
      onClick={onBtnClick}
      style={{ background: `url('${imageUrl}') no-repeat center center/cover` }}
    />
  );
};

export default Icon;

import classes from './ButtonWrap.module.css'

const ButtonWrap = ({ className, children }) => {
  return <div className={`${classes.buttonWrap} ${className}`}>{children}</div>;
};
export default ButtonWrap

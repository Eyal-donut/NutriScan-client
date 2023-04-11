import classes from "./IsMatchBar.module.css";

const IsMatchBar = (isMatch) => {
  return (
    <div className={isMatch ? classes.containerYes : classes.containerNo}>
      {isMatch ? `It's a match!` : `Not a matching your preferences`}
    </div>
  );
};

export default IsMatchBar;

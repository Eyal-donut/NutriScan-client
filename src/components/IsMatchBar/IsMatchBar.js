import classes from "./IsMatchBar.module.css";

const IsMatchBar = (isMatch) => {
  return (
    <div
      className={
        isMatch === "yes"
          ? classes.containerYes
          : isMatch === "no"
          ? classes.containerNo
          : classes.containerUnknown
      }
    >
      {isMatch === "yes"
        ? `It's a match!`
        : isMatch === "no"
        ? `Not a matching your preferences`
        : `Unknown`}
    </div>
  );
};

export default IsMatchBar;

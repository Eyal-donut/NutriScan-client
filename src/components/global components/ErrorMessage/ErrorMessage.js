import classes from "./ErrorMessage.module.css"

const ErrorMessage = ({ textOne, textTwo }) => {
  return (
    <div className={classes.error}>
      {textOne} <br /> {textTwo}
    </div>
  );
};

export default ErrorMessage;

import classes from "./LoginForm.module.css";
import { useRef, useState } from "react";
import Button from "../Button/Button";
import constants from "../../constants/constants";

const LoginForm = ({ loginHandler }) => {
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const inputHandler = (e) => {
    setTimeout(() => {
      if (e.target.name === "email") {
        if (!constants.EMAIL_REGEX.test(e.target.value)) {
          setIsInvalidEmail(true);
        } else setIsInvalidEmail(false);
      }
      if (e.target.name === "password") {
        if (e.target.value.length <= 5) {
          setIsInvalidPassword(true);
        } else setIsInvalidPassword(false);
      }
    }, 1000);
  };

  const submitHandler = (e) => {
    loginHandler(e, emailRef.current.value, passwordRef.current.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <ul className={classes.ul}>
        <li>
          <label htmlFor="email" className={classes.label}>
            Email:{" "}
          </label>
          <input
            name="email"
            type="text"
            ref={emailRef}
            className={classes.input}
            placeholder="your-name@gmail.com"
            onChange={inputHandler}
          />
        </li>
        <li>
          <label htmlFor="password" className={classes.label}>
            Password:{" "}
          </label>
          <input
            name="password"
            type="password"
            ref={passwordRef}
            className={classes.input}
            onChange={inputHandler}
          />
        </li>
      </ul>
      {isInvalidEmail && !isInvalidPassword && (
        <div className={classes.errorText}>Invalid Email format</div>
      )}
      {isInvalidPassword && !isInvalidEmail && (
        <div className={classes.errorText}>
          Password must be longer than six characters.
        </div>
      )}
      {isInvalidEmail && isInvalidPassword && (
        <div className={classes.errorText}>
          Invalid Email format.
          <br />
          Password must be longer than six characters.
        </div>
      )}
      <Button
        type="submit"
        text="Login"
        id="login-btn"
        className={classes.button}
        disabled={isInvalidEmail || isInvalidPassword ? true : false}
      />
    </form>
  );
};
export default LoginForm;

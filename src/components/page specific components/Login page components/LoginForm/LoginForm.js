import classes from "./LoginForm.module.css";
import Button from "../../../global components/Button/Button";
import { useEffect, useRef, useState } from "react";
import { constants } from "../../../../constants/constants";
import ErrorMessage from "../../../global components/ErrorMessage/ErrorMessage";
import { useErrorMessageContext } from "../../../../context/ErrorMessageContext";

const LoginForm = ({ loginHandler, isLoginOrRegister }) => {
  const { errorMessage, setErrorMessage } = useErrorMessageContext();

  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isEmptyForm, setIsEmptyForm] = useState(true);
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    if (isInvalidEmail && isInvalidPassword) {
      setLoginError(
        "Invalid Email format. Password must be longer than six characters."
      );
    } else if (isInvalidEmail && !isInvalidPassword) {
      setLoginError("Invalid Email format.");
    } else if (!isInvalidEmail && isInvalidPassword) {
      setLoginError("Password must be longer than six characters.");
    } else if (!isInvalidEmail && !isInvalidPassword) {
      setLoginError("");
    }
    if (errorMessage !== "") {
      setLoginError(errorMessage);
    }
  }, [isInvalidEmail, isInvalidPassword, errorMessage]);

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const inputHandler = (e) => {
    if (isEmptyForm) setIsEmptyForm(false);
    console.log(errorMessage);
    if (errorMessage !== "") setErrorMessage("");
    setTimeout(() => {
      if (e.target.name === "email") {
        if (
          emailRef.current.value.length === 0 &&
          passwordRef.current.value.length === 0
        ) {
          setIsEmptyForm(true);
          setIsInvalidEmail(false);
          setIsInvalidPassword(false);
        } else if (!constants.EMAIL_REGEX.test(e.target.value)) {
          setIsInvalidEmail(true);
        } else setIsInvalidEmail(false);
      }
      if (e.target.name === "password") {
        if (
          emailRef.current.value.length === 0 &&
          passwordRef.current.value.length === 0
        ) {
          setIsEmptyForm(true);
          setIsInvalidEmail(false);
          setIsInvalidPassword(false);
        } else if (e.target.value.length <= 5) {
          setIsInvalidPassword(true);
        } else setIsInvalidPassword(false);
      }
    }, 1000);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEmptyForm) {
      setLoginError("Please enter Email and Password");
      return;
    }

    loginHandler(
      "login",
      e,
      emailRef.current.value.toLowerCase(),
      passwordRef.current.value
    );
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <ul className={classes.ul}>
        {isLoginOrRegister === "register" && (
          <li>
            <label htmlFor="email" className={classes.label}>
              Name:{" "}
            </label>
            <input
              name="email"
              type="text"
              ref={nameRef}
              className={classes.input}
              onChange={inputHandler}
            />
          </li>
        )}
        <li>
          <label htmlFor="email" className={classes.label}>
            Email:{" "}
          </label>
          <input
            name="email"
            type="text"
            ref={emailRef}
            className={classes.input}
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
      {loginError !== "" && <ErrorMessage textOne={loginError} />}
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

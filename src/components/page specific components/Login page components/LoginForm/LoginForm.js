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
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isEmptyForm, setIsEmptyForm] = useState(true);
  const [loginError, setLoginError] = useState("");

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    isInvalidEmail || isInvalidPassword || isInvalidName
      ? setLoginError(true)
      : setLoginError("");
  }, [isInvalidEmail, isInvalidPassword, isInvalidName]);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
    };
    // eslint-disable-next-line
  }, []);

  const inputHandler = (e) => {
    if (isEmptyForm) setIsEmptyForm(false);
    if (errorMessage !== "") setErrorMessage("");

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
      if (e.target.name === "name") {
        if (e.target.value.length === 0) {
          setIsInvalidName(true);
        } else setIsInvalidName(false);
      }
    }, 1000);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEmptyForm) {
      setLoginError("Please fill out the form");
      return;
    }
    if (loginError !== "") return;

    if (isLoginOrRegister === "login") {
      loginHandler(
        "login",
        e,
        emailRef.current.value.toLowerCase(),
        passwordRef.current.value
      );
    }
    if (isLoginOrRegister === "register") {
      loginHandler(
        "register",
        e,
        emailRef.current.value.toLowerCase(),
        passwordRef.current.value,
        nameRef.current.value
      );
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <ul className={classes.ul}>
        {isLoginOrRegister === "register" && (
          <li className={classes.li}>
            <label htmlFor="name" className={classes.label}>
              Name:{" "}
            </label>
            <input
              name="name"
              type="text"
              ref={nameRef}
              className={classes.input}
              onChange={inputHandler}
            />
            {isInvalidName && (
              <ErrorMessage textOne={"Please enter a username"} />
            )}
          </li>
        )}
        <li className={classes.li}>
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
          {isInvalidEmail && <ErrorMessage textOne={"Invalid Email format"} />}
        </li>
        <li className={classes.li}>
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
          {isInvalidPassword && (
            <ErrorMessage
              textOne={"Password must be longer than six characters"}
            />
          )}
        </li>
      </ul>
      {errorMessage !== "" && (
        <ErrorMessage textOne={""} textTwo={errorMessage} />
      )}
      <Button
        type="submit"
        text="Login"
        id="login-btn"
        className={classes.button}
      />
    </form>
  );
};
export default LoginForm;

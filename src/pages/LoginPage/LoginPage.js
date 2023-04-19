import Modal from "../../components/global components/Modal/Modal";
import LoginForm from "../../components/page specific components/Login page components/LoginForm/LoginForm";
import Spinner from "../../components/global components/Spinner/Spinner";
import { useEffect } from "react";
import { useLoginAndRegister } from "../../hooks/useLoginAndRegister";
import { useLoginAndRegisterPagesDisplayContext } from "../../context/LoginAndRegisterPageContext";
import { useErrorMessageContext } from "../../context/ErrorMessageContext";

const LoginPage = () => {
  const { isLoginOrRegister } = useLoginAndRegisterPagesDisplayContext();
  const { handelLoginAndRegister, isLoading } = useLoginAndRegister();
  const { setErrorMessage } = useErrorMessageContext();

  useEffect(() => {
    return () => {
      setErrorMessage("");
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Modal page={"login"}>
      <h1>{isLoginOrRegister === "login" ? "Login" : "Register"}</h1>
      {!isLoading && (
        <LoginForm
          isLoginOrRegister={isLoginOrRegister}
          loginHandler={handelLoginAndRegister}
        />
      )}
      {isLoading && <Spinner />}
    </Modal>
  );
};
export default LoginPage;

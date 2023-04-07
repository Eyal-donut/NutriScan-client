import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const loginHandler = (e, email, password) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Modal>
      <h1>Log in</h1>
      <LoginForm loginHandler={loginHandler} />
      
    </Modal>
  );
};
export default LoginPage;

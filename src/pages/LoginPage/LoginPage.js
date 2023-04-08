// import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import LoginForm from "../../components/LoginForm/LoginForm";
import { loginUser } from "../../api";
// import { useState } from "react";
import { useErrorMessageContext } from "../../context/ErrorMessageContext";

const LoginPage = () => {
  const {setErrorMessage} = useErrorMessageContext()

  // const [isLoginFailed, setIsLoginFailed] = useState(false);
  // const [loginMessage, setLoginMessage] = useState("")

  const loginHandler = async (e, email, password) => {
    e.preventDefault();
    console.log(email, password);
    const data = await loginUser({email, password})
    if (data.success) {
      console.log(data.token)
    } else {
      console.error(data.error)
      setErrorMessage(data.error)
      // setIsLoginFailed(true)
    }
  };

  return (
    <Modal>
      <h1>Log in</h1>
      <LoginForm loginHandler={loginHandler}/>
    </Modal>
  );
};
export default LoginPage;

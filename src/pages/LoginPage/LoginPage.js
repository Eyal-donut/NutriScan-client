import Modal from "../../components/Modal/Modal";
import LoginForm from "../../components/LoginForm/LoginForm";
import { loginUser } from "../../api";
import { useErrorMessageContext } from "../../context/ErrorMessageContext";

const LoginPage = () => {
  const { setErrorMessage } = useErrorMessageContext();

  const loginHandler = async (e, email, password) => {
    e.preventDefault();
    const data = await loginUser({ email, password });
    if (data.success) {
      console.log(data.token);
    } else {
      console.error(data.error);
      setErrorMessage(data.error);
    }
  };

  return (
    <Modal>
      <h1>Log in</h1>
      <LoginForm loginHandler={loginHandler} />
    </Modal>
  );
};
export default LoginPage;

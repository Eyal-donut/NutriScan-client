import Modal from "../../components/Modal/Modal";
import LoginForm from "../../components/LoginForm/LoginForm";
import { getCurrentUser, loginUser } from "../../api";
import { useErrorMessageContext } from "../../context/ErrorMessageContext";
import { useLoggedUser } from "../../hooks/useLoggedUser";
import {useLocalStorage} from "../../hooks/useLocalStorage"

const LoginPage = () => {
  const { setErrorMessage } = useErrorMessageContext();
  const { setLocalStorageItem } = useLocalStorage();
  const { setExistingUser } = useLoggedUser();

  const loginHandler = async (e, email, password) => {
    e.preventDefault();
    const data = await loginUser({ email, password });
    if (data.success) {
      setLocalStorageItem("token", data.token);
      const fetchedUser = await getCurrentUser(data.token);
      if (data.success) {
        setExistingUser(fetchedUser.data);
      } else {
        setErrorMessage(data.error);
      }
    } else {
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

import Modal from "../../components/Modal/Modal";
import LoginForm from "../../components/LoginForm/LoginForm";
import { getCurrentUser, loginUser } from "../../API/usersApi";
import { useErrorMessageContext } from "../../context/ErrorMessageContext";
import { useLoggedUser } from "../../hooks/useLoggedUser";
import { useLoggedUserContext } from "../../context/loggedUserContext";
import { useSpinnerContext } from "../../context/SpinnerContext";
import Spinner from "../../components/Spinner/Spinner";
import { setAuthCookie } from "../../coockieManager/coockieManager";
const LoginPage = () => {
  const { setErrorMessage } = useErrorMessageContext();
  const { setIsLoggedUser } = useLoggedUserContext();
  const { isLoading, setIsLoading } = useSpinnerContext();

  const { setExistingUser } = useLoggedUser();

  const loginHandler = async (e, email, password) => {
    
    e.preventDefault();
    setIsLoading(true);
    const data = await loginUser({ email, password });
    if (data.success) {
      setAuthCookie(data.token);
      const fetchedUser = await getCurrentUser(data.token);
      if (data.success) {
        setExistingUser(fetchedUser.data);
        setIsLoggedUser(true);
        setIsLoading(false);
      } else {
        setErrorMessage(data.error);
        setIsLoading(false);
      }
    } else {
      setErrorMessage(data.error);
      setIsLoading(false);
    }
  };

  return (
    <Modal>
      <h1>Log in</h1>
      {!isLoading && <LoginForm loginHandler={loginHandler} />}
      {isLoading && <Spinner />}
    </Modal>
  );
};
export default LoginPage;

import Modal from "../../components/global components/Modal/Modal";
import LoginForm from "../../components/page specific components/Login page components/LoginForm/LoginForm";
import Spinner from "../../components/global components/Spinner/Spinner";
import { useLoginAndRegister } from "../../hooks/useLoginAndRegister";

const LoginPage = () => {

  const {handelLoginAndRegister, isLoading} = useLoginAndRegister()

  return (
    <Modal>
      <h1>Log in</h1>
      {!isLoading && <LoginForm loginHandler={handelLoginAndRegister} />}
      {isLoading && <Spinner />}
    </Modal>
  );
};
export default LoginPage;

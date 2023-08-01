import { useNavigate } from "react-router-dom";
import { loginUser, getCurrentUser, registerUser } from "../API/usersApi";
import { useErrorMessageContext } from "../context/ErrorMessageContext";
import { useLoggedUserContext } from "../context/loggedUserContext";
import { useSpinnerContext } from "../context/SpinnerContext";
import { setAuthCookie } from "../coockieManager/coockieManager";
import { useLoggedUser } from "./useLoggedUser";
import { useLoginAndRegisterPagesDisplayContext } from "../context/LoginAndRegisterPageContext";

export const useLoginAndRegister = () => {
  const { setErrorMessage } = useErrorMessageContext();
  const { setIsLoggedUser } = useLoggedUserContext();
  const { setIsLoading, isLoading } = useSpinnerContext();
  const { setExistingUser } = useLoggedUser();
  const {setIsLoginPageDisplay} = useLoginAndRegisterPagesDisplayContext()

  const navigate = useNavigate();

  const handelLoginAndRegister = async (method, e, email, password, name) => {
    e.preventDefault();
    let data;
    setIsLoading(true);
    if (method === "login") {
      data = await loginUser({ email, password });
    } else if (method === "register") {
      data = await registerUser({ email, password, name });
    }
    if (data.success) {
      console.log(typeof data.token)
      setAuthCookie(data.token);
      const fetchedUser = await getCurrentUser(data.token);
      if (data.success) {
        setExistingUser(fetchedUser.data);
        if (method === "register") {
          setIsLoggedUser(null);
          method === "register" && navigate("/profile");
        }
        setIsLoggedUser(true);
        setIsLoading(false);
        setIsLoginPageDisplay(false)
      } else {
        setErrorMessage(data.error);
        setIsLoading(false);
      }
    } else {
      setErrorMessage(data.error);
      setIsLoading(false);
    }
  };

  return { handelLoginAndRegister, isLoading };
};

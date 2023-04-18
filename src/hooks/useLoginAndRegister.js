import { loginUser, getCurrentUser, registerUser } from "../API/usersApi";
import { useErrorMessageContext } from "../context/ErrorMessageContext";
import { useLoggedUserContext } from "../context/loggedUserContext";
import { useSpinnerContext } from "../context/SpinnerContext";
import { setAuthCookie } from "../coockieManager/coockieManager";
import { useLoggedUser } from "./useLoggedUser";

export const useLoginAndRegister = (method) => {
  const { setErrorMessage } = useErrorMessageContext();
  const { setIsLoggedUser } = useLoggedUserContext();
  const { setIsLoading, isLoading } = useSpinnerContext();
  const { setExistingUser } = useLoggedUser();

  const handelLoginAndRegister = async (method, e, email, password, name) => {
    let data;
    e.preventDefault();
    setIsLoading(true);
    if (method === "login") {
      data = await loginUser({ email, password });
    } else if (method === "register") {
      data = await registerUser({ email, password, name });
    }
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

  return { handelLoginAndRegister, isLoading };
};

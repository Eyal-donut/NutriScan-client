import { useLoggedUserContext } from "../context/loggedUserContext";
import { newUser } from "../constants/constants";

export const useLoggedUser = (section, key, value) => {
  const { loggedUser, setLoggedUser } = useLoggedUserContext();
  const localLoggedUser = localStorage.getItem("loggedUser");
  if (localLoggedUser) {
    const fetchedFromLocal = JSON.parse(localLoggedUser);
    setLoggedUser(fetchedFromLocal);
  } else {
    localStorage.setItem("loggedUser", JSON.stringify(newUser));
    setLoggedUser(newUser);
  }
  let updatedUser = {};

  if (section) {
    updatedUser = {
      ...loggedUser,
      section: {
        key: value,
      },
    };
    setLoggedUser(updatedUser);
  } else if (key === "singleProduct") {
    updatedUser = {
      ...loggedUser,
      products: [...loggedUser.products, value],
    };
    setLoggedUser(updatedUser);
  } else if (key === "allProducts") {
    updatedUser = {
      ...loggedUser,
      products: value,
    };
    setLoggedUser(updatedUser);
  } else if (key){
    updatedUser = {
      ...loggedUser,
      key: value,
    };
    setLoggedUser(updatedUser);
  }
  console.log(loggedUser)
  return loggedUser;
};

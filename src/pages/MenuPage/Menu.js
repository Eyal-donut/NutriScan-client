import Button from "../../components/global components/Button/Button";
import Modal from "../../components/global components/Modal/Modal";
import classes from "./Menu.module.css";
import LoginPage from "../LoginPage/LoginPage";
import { useMenuDisplayContext } from "../../context/MenuDisplayContext";
import { useLoggedUser } from "../../hooks/useLoggedUser";
import { useNavigate } from "react-router-dom";
import { useLoggedUserContext } from "../../context/loggedUserContext";
import { useLoginAndRegisterPagesDisplayContext } from "../../context/LoginAndRegisterPageContext";

const Menu = () => {
  const { setNewUser } = useLoggedUser();
  const { isMenuDisplay, setIsMenuDisplay } = useMenuDisplayContext();
  const { loggedUser } = useLoggedUserContext();
  const { setIsLoginPageDisplay, setIsLoginOrRegister, isLoginPageDisplay } =
    useLoginAndRegisterPagesDisplayContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    setNewUser();
    navigate("/");
    setIsMenuDisplay(false);
  };

  const handleLoginClick = () => {
    setIsMenuDisplay(false);
    setIsLoginOrRegister("login");
    setIsLoginPageDisplay(true);
  };

  return (
    <>
      {isMenuDisplay && (
        <Modal
          page="menu"
          screenCoverClassName={isMenuDisplay ? classes.display : classes.hide}
          windowClassName={classes.menu}
        >
          <h1>Menu</h1>
          {loggedUser.name && (
            <Button text="Logout" onBtnClick={handleLogout} />
          )}
          {!loggedUser.name && (
            <Button text="Login" onBtnClick={handleLoginClick} />
          )}
        </Modal>
      )}
      {isLoginPageDisplay && <LoginPage />}
    </>
  );
};
export default Menu;

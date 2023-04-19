import ContentWrap from "../../components/global components/ContentWrap/ContentWrap.js";
import LoginPage from "../LoginPage/LoginPage.js";
import SkipButton from "../../components/global components/SkipButton/SkipButton.js";
import Button from "../../components/global components/Button/Button.js";
import ButtonWrap from "../../components/global components/ButtonWrap/ButtonWrap.js";
import classes from "./WelcomePage.module.css"
import { constants } from "../../constants/constants.js";
import { useLoginAndRegisterPagesDisplayContext } from "../../context/LoginAndRegisterPageContext.js";
import { useLoggedUser } from "../../hooks/useLoggedUser.js";
import Logo from "../../components/global components/Logo/Logo.js";

const WelcomePage = () => {
  const { isLoginPageDisplay, setIsLoginPageDisplay, setIsLoginOrRegister } =
    useLoginAndRegisterPagesDisplayContext();

  const { setNewUser } = useLoggedUser();

  const clickHandler = (e) => {
    if (e.target.id === "login-btn") {
      setIsLoginOrRegister("login")
      setIsLoginPageDisplay(true);
    }
    if (e.target.id === "skip-btn/") {
      setNewUser()
    }
    if (e.target.id === "next-btn") {
      setIsLoginOrRegister("register")
      setIsLoginPageDisplay(true);
    }
  };

  return (
    <div className={classes.wrap}>
      {isLoginPageDisplay &&  <LoginPage />}
      <Logo sizeInRem="15rem"/>

      <ContentWrap width="75%">
        <h1>
          Welcome to
          <br />
          {constants.APP_NAME}
        </h1>
        <p>
          Easily scan food and cosmetic products to check if they meet your
          nutritional and environmental preferences. Make informed
          purchasing decisions and find products that align with your values.
        </p>
        <ButtonWrap className={classes.buttonsWrap}>
          <Button text="Login" onBtnClick={clickHandler} id="login-btn" />
          <Button text="Next" onBtnClick={clickHandler} id="next-btn" />
        </ButtonWrap>
        <p>
          New here?
          <br />
          Click next for a quick sign up
        </p>
        <SkipButton onBtnClick={clickHandler}/>
        
      </ContentWrap>
    </div>
  );
};
export default WelcomePage;

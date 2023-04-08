import ContentWrap from "../../components/ContentWrap/ContentWrap.js";
import { constants } from "../../constants/constants.js";
import Button from "../../components/Button/Button.js";
import ButtonWrap from "../../components/ButtonWrap/ButtonWrap.js";
import { useLoginPageDisplayContext } from "../../context/LoginPageDisplayContext.js";
import LoginPage from "../LoginPage/LoginPage.js";
import { useLoggedUser } from "../../hooks/useLoggedUser.js";

const WelcomePage = () => {
  const { isLoginPageDisplay, setIsLoginPageDisplay } =
    useLoginPageDisplayContext();

  const { setLocalAndLoggedUser } = useLoggedUser();

  const clickHandler = (e) => {
    if (e.target.id === "login-btn") {
      setIsLoginPageDisplay(true);
    }
    if (e.target.id === "next-btn") {
      setLocalAndLoggedUser()
      // updateLocalAndLoggedUser(undefined, "allProducts", ["sugar"])

    }
  };

  return (
    <>
      {isLoginPageDisplay && <LoginPage />}

      <div>LOGO - design sth cool</div>
      <ContentWrap>
        <h1>
          Welcome to
          <br />
          {constants.APP_NAME}
        </h1>
        <p>
          Easily scan food and cosmetic products to check if they meet your
          nutritional, allergen, and environmental preferences. Make informed
          purchasing decisions and find products that align with your values.
        </p>
        <ButtonWrap>
          <Button text="Login" onBtnClick={clickHandler} id="login-btn" />
          <Button text="Next" onBtnClick={clickHandler} id="next-btn" />
        </ButtonWrap>
        <p>
          New here?
          <br />
          Click next for a quick set up of your preferences
        </p>
      </ContentWrap>
    </>
  );
};
export default WelcomePage;

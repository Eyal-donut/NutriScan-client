import ContentWrap from "../../components/ContentWrap/ContentWrap.js";
import constants from "../../constants/constants.js";
import Button from "../../components/Button/Button.js"
import classes from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <>
      <div>LOGO - design sth cool</div>
      <ContentWrap>
        <h1>
          Welcome to
          <br />
          {constants.APP_NAME}
        </h1>
        <Button text='Login'/>
        <p>
          Easily scan food and cosmetic products to check if they meet your
          nutritional, allergen, and environmental preferences. Make informed
          purchasing decisions and find products that align with your values.
        </p>
        <p>New here?<br/>Click next for a quick set up of your preferences</p>
      </ContentWrap>
    </>
  );
};
export default WelcomePage;

import constants from '../../constants/constants.js'
import classes from './WelcomePage.module.css'

const WelcomePage = () => {
  return (
    <>
      <div>LOGO - design sth cool</div>
      <h1>Welcome to<br/>{constants.APP_NAME}</h1>
    </>
  );
};
export default WelcomePage;

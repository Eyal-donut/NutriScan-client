import { Link } from "react-router-dom";
import classes from "./ErrorPage.module.css";
import { useEffect } from "react";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";

const ErrorPage = () => {
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();

  useEffect(() => {
    checkCameraAndRefresh();

    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <main>
        <h1 className={classes.h1}>Oops, an error has occurred!</h1>
        <p className={classes.p}>That's not where you wanted to go...</p>
        <p className={classes.p}>Could not find this page!😥</p>
      </main>
      <p>
        Go back to <Link to="/">Home page</Link>
      </p>
    </>
  );
};
export default ErrorPage;

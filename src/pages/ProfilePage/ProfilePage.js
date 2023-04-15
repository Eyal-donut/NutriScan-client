import PageHeader from "../../components/PageHeader/PageHeader"
import classes from "./ProfilePage.module.css"

import { useEffect } from "react";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import {useLoggedUserContext} from "../../context/loggedUserContext"
const ProfilePage = () => {
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const {loggedUser} = useLoggedUserContext()

  useEffect(() => {
    checkCameraAndRefresh();
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <PageHeader className={classes.header}>
        <h1 className={classes.h1}>Hello {loggedUser.name}!</h1>
      </PageHeader>
    </>
  )
};
export default ProfilePage;

import PageHeader from "../../components/global components/PageHeader/PageHeader";
import classes from "./ProfilePage.module.css";
import ContentWrap from "../../components/global components/ContentWrap/ContentWrap";
import DropdownComponent from "../../components/page specific components/ProfilePageComponents/DropdownComponent/DropdownComponent";
import { useEffect } from "react";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import { useLoggedUserContext } from "../../context/loggedUserContext";
import { useUserSettings } from "../../hooks/useUserSettings/useUserSettings";
import { greetUser } from "../../utils/greetUser";
import { capitalizeUsername } from "../../utils/capitalizeUsername";
import { updateUser } from "../../API/usersApi";
import { getAuthCookie } from "../../coockieManager/coockieManager";

const ProfilePage = () => {
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const { createSettingsArray } = useUserSettings();
  const { loggedUser } = useLoggedUserContext();

  const settingsArray = createSettingsArray(undefined, loggedUser);

  useEffect(() => {
    checkCameraAndRefresh();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (loggedUser.name) {
      return async () => {
        updateUser(getAuthCookie(), loggedUser);
      };
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <PageHeader className={classes.header}>
        <div className={classes.container}>
          <h2 className={classes.h2}>
            {greetUser()} {capitalizeUsername(loggedUser.name)}!
          </h2>
          <h4>Settings</h4>
        </div>
      </PageHeader>
      <ContentWrap width="90%" className={classes.contentWrap}>
        {settingsArray.map((category) => (
          <DropdownComponent
            key={category.name}
            options={category.value}
            headerText={category.name}
            categoryIcon={category.icon}
            category={category.category}
            description={category.description}
          />
        ))}
      </ContentWrap>
    </>
  );
};
export default ProfilePage;

import PageHeader from "../../components/global components/PageHeader/PageHeader";
import classes from "./ProfilePage.module.css";
import ContentWrap from "../../components/global components/ContentWrap/ContentWrap";
import DropdownComponent from "../../components/page specific components/ProfilePageComponents/DropdownComponent/DropdownComponent";
import { useEffect } from "react";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import { useLoggedUserContext } from "../../context/loggedUserContext";
import { useUserSettings } from "../../hooks/useUserSettings/useUserSettings";

const ProfilePage = () => {
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const { createSettingsArray } = useUserSettings();
  const { loggedUser } = useLoggedUserContext();

  const settingsArray = createSettingsArray(undefined, loggedUser);

  useEffect(() => {
    checkCameraAndRefresh();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <PageHeader className={classes.header}>
        <h1 className={classes.h1}>Hello {loggedUser.name}!</h1>
      </PageHeader>
      <ContentWrap width="90%" className={classes.contentWrap}>
        {settingsArray.map((category) => (
          <DropdownComponent
            key={category.name}
            options={category.value}
            headerText={category.name}
            categoryIcon={category.icon}
            category={category.category}
          />
        ))}
      </ContentWrap>
    </>
  );
};
export default ProfilePage;

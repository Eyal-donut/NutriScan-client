import PageHeader from "../../components/PageHeader/PageHeader";
import classes from "./ProfilePage.module.css";
import { icons } from "../../constants/constants";
import { useEffect } from "react";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import { useLoggedUserContext } from "../../context/loggedUserContext";
import DropdownComponent from "../../components/ProfilePageComponents/DropdownComponent/DropdownComponent";
const ProfilePage = () => {
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const { loggedUser } = useLoggedUserContext();

  const settingsCategories = [
    {name: "Diet Preferences",
    value: [
      {
        name: "Gluten Free",
        value: loggedUser["Gluten free"],
        type: "checkbox",
        imageUrl:icons.MATCH_ICON,
      },
      {
        name: "Lactose Free",
        value: loggedUser["Gluten free"],
        type: "checkbox",
        imageUrl:icons.MATCH_ICON,
      },

    ]
  
  }
  ]


  const options = [
    {
      name: "Carbohydrates",
      imageUrl: icons.MATCH_ICON,
      type: "checkbox",
      value: "off"
    },
    {
      name: "Cholesterol",
      imageUrl: icons.MATCH_ICON,
      type: "range",
      value: "low"
    }
  ];

  useEffect(() => {
    checkCameraAndRefresh();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <PageHeader className={classes.header}>
        <h1 className={classes.h1}>Hello {loggedUser.name}!</h1>
      </PageHeader>
      <DropdownComponent options={options} headerText="Nutritional values" categoryIcon={icons.WARNING_ICON}/>
    </>
  );
};
export default ProfilePage;

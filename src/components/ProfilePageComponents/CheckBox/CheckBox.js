import classes from "./CheckBox.module.css";
import { useState, useEffect } from "react";
import { useLoggedUserContext } from "../../../context/loggedUserContext";
import { useLocalStorage } from "../../../hooks/useLocalStorage";


const Checkbox = ({ val, optionName, category }) => {
  const { loggedUser, setLoggedUser } = useLoggedUserContext();
  const { setLocalStorageItem } = useLocalStorage();
  const [isOn, toggle] = useState(val);

  const onCheckBoxClick = () => {
    toggle((prevState)=> !prevState);
  };

  useEffect(() => {
    const update = {
      ...loggedUser,
      settings: {
        ...loggedUser.settings,
        [category]: {
          ...loggedUser.settings[category],
          [optionName]: isOn,
        },
      },
    };
    setLoggedUser(update);
    setLocalStorageItem("loggedUser", update);
    // eslint-disable-next-line
  }, [isOn]);

  return (
    <label className={classes.wrap}>
      <input
        type="checkbox"
        defaultChecked={isOn}
        onClick={onCheckBoxClick}
        className={classes.input}
        id={optionName}
      ></input>
      <span className={classes.checkbox}/>
    </label>
  );
};
export default Checkbox;

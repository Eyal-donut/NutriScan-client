import { useLoggedUserContext } from "../../../../context/loggedUserContext";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import classes from "./RangeSelection.module.css";
import { useEffect, useState } from "react";

const RangeSelection = ({ val, category, optionName }) => {
  const { loggedUser, setLoggedUser } = useLoggedUserContext();
  const { setLocalStorageItem } = useLocalStorage();
  const [num, setNum] = useState(val);

  const valuesArray = ["Off", "Zero", "Low", "Moderate"];

  const handleClick = (e) => {
    if (e.target.id === "increment" && num < 3) {
      setNum((prevCount) => prevCount + 1);
    }
    if (e.target.id === "decrement" && num > 0) {
      setNum((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    const update = {
      ...loggedUser,
      settings: {
        ...loggedUser.settings,
        [category]: {
          ...loggedUser.settings[category],
          [optionName]: num,
        },
      },
    };
    setLoggedUser(update);
    setLocalStorageItem("loggedUser", update);
    // eslint-disable-next-line
  }, [num]);

  return (
    <div className={classes.range} id={optionName}>
      <button
        className={classes.decrement}
        onClick={handleClick}
        id="decrement"
      >
        -
      </button>
      <label>{valuesArray[num]}</label>
      <button
        className={classes.increment}
        onClick={handleClick}
        id="increment"
      >
        +
      </button>
    </div>
  );
};
export default RangeSelection;

import { useLocation } from "react-router-dom";
import { useState } from "react";
import classes from "./SkipButton.module.css";
import Button from "../Button/Button";

const SkipButton = ({ onBtnClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const clickHandler = (e) => {
    setIsClicked(true);

    setTimeout(() => {
      onBtnClick(e);
    }, 300);
  };

  return (
    <Button
      text="Skip and start scanning"
      onBtnClick={clickHandler}
      id={`skip-btn${currentPath}`}
      className={!isClicked ? classes.button : classes.clickedButton}
    ></Button>
  );
};

export default SkipButton;

import Icon from "../../Icon(clickable)/Icon";
import classes from "./IsMatchBar.module.css";
import {icons} from "../../../constants/constants"


const IsMatchBar = ({isMatch}) => {

  return (
    <div
      className={
        `${classes.container} ${isMatch === "yes"
          ? classes.containerYes
          : isMatch === "no"
          ? classes.containerNo
          : classes.containerUnknown}`
      }
    >
    <Icon imageUrl={isMatch === "yes"
          ? icons.MATCH_ICON
          : isMatch === "no"
          ? icons.NO_MATCH_ICON
          : icons.WARNING_ICON}/>
      {isMatch === "yes"
        ? `It's a match!`
        : isMatch === "no"
        ? `Product doesn't match your filters`
        : `Can't determine compatibility`}
    </div>
  );
};

export default IsMatchBar;

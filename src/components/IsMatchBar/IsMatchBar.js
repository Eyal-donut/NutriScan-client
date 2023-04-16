import Icon from "../Icon(clickable)/Icon";
import classes from "./IsMatchBar.module.css";
import { icons } from "../../constants/constants";

const IsMatchBar = ({ isMatch, page }) => {
  return (
    <div
      className={
        page === "product"
          ? `${classes.containerBig} ${
              isMatch === true
                ? classes.containerYes
                : isMatch === false
                ? classes.containerNo
                : classes.containerUnknown
            }`
          : `${classes.containerSmall} ${
              isMatch === true
                ? classes.containerYes
                : isMatch === false
                ? classes.containerNo
                : classes.containerUnknown
            }`
      }
    >
      <Icon
        imageUrl={
          isMatch === true
            ? icons.MATCH_ICON
            : isMatch === false
            ? icons.NO_MATCH_ICON
            : icons.WARNING_ICON
        }
        className={page === "my-scans" ? classes.icon : classes.iconProductPage}
      />
      <div
        className={
          page === "my-scans" ? classes.MyScansText : classes.ProductPageText
        }
      >
        {page === "product"
          ? isMatch === true
            ? `It's a match!`
            : isMatch === false
            ? `Product doesn't match your filters`
            : `Can't determine compatibility`
          : isMatch === true
          ? `Match`
          : isMatch === false
          ? `Not a match`
          : `Missing information`}
      </div>
    </div>
  );
};

export default IsMatchBar;

import Icon from "../Icon(clickable)/Icon";
import classes from "./IsMatchBar.module.css";
import { icons } from "../../constants/constants";

const IsMatchBar = ({ isMatch, page }) => {
  return (
    <div
      className={
        page === "product"
          ? `${classes.containerBig} ${
              isMatch === "yes"
                ? classes.containerYes
                : isMatch === "no"
                ? classes.containerNo
                : classes.containerUnknown
            }`
          : `${classes.containerSmall} ${
              isMatch === "yes"
                ? classes.containerYes
                : isMatch === "no"
                ? classes.containerNo
                : classes.containerUnknown
            }`
      }
    >
      <Icon
        imageUrl={
          isMatch === "yes"
            ? icons.MATCH_ICON
            : isMatch === "no"
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
          ? isMatch === "yes"
            ? `It's a match!`
            : isMatch === "no"
            ? `Product doesn't match your filters`
            : `Can't determine compatibility`
          : isMatch === "yes"
          ? `Match`
          : isMatch === "no"
          ? `Not a match`
          : `Missing information`}
      </div>
    </div>
  );
};

export default IsMatchBar;

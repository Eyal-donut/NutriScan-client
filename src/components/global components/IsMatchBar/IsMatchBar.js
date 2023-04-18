import Icon from "../Icon(clickable)/Icon";
import classes from "./IsMatchBar.module.css";
import { icons } from "../../../constants/constants";

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
                : isMatch === "Unknown"
                ? classes.containerUnknown
                : classes.containerNoFilters
            }`
          : `${classes.containerSmall} ${
              isMatch === true
                ? classes.containerYes
                : isMatch === false
                ? classes.containerNo
                : isMatch === "Unknown"
                ? classes.containerUnknown
                : classes.containerNoFilters
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
            : isMatch === "Unknown"
            ? `Can't determine compatibility`
            : "Set up your profile to easily sort products"
          : isMatch === true
          ? `Match`
          : isMatch === false
          ? `Not a match`
          : isMatch === "Unknown"
          ? `Missing information`
          : "No filters set"}
      </div>
    </div>
  );
};

export default IsMatchBar;

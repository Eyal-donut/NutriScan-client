import InfoCard from "../InfoCard/InfoCard";
import Icon from "../Icon(clickable)/Icon";
import classes from "./DietPreferences.module.css";
import { icons } from "../../constants/constants";

const DietPreferences = ({ dietPreferences }) => {
  return (
    <InfoCard
      header="Diet Preferences"
      isMatch={dietPreferences.isMatch}
      subheader={
        dietPreferences.isMatch
          ? "Product matches all your diet and lifestyle filters"
          : !dietPreferences.isMatch
          ? "Product doesn't match all your diet filters"
          : "Can't determine compatibility"
      }
    > 
      {dietPreferences.matchingOptions.map((option) => {
        return (
          <div key={`key${option.optionName}`} className={classes.optionWrap}>
            <Icon className={classes.icon} imageUrl={icons.MATCH_ICON} />
            {option.optionName}
          </div>
        );
      })}
      {dietPreferences.unknownOptions.map((option) => {
        return (
          <div key={`key${option.optionName}`} className={classes.optionWrap}>
            <Icon className={classes.icon} imageUrl={icons.WARNING_ICON} />
            {option.optionName} - missing information
          </div>
        );
      })}
      {dietPreferences.notMatchingOptions.map((option) => {
        return (
          <div key={`key${option.optionName}`} className={classes.optionWrap}>
            <Icon className={classes.icon} imageUrl={icons.NO_MATCH_ICON} />
            {option.optionName}
          </div>
        );
      })}
    </InfoCard>
  );
};

export default DietPreferences;

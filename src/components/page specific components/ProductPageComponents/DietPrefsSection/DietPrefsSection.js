import InfoCard from "../InfoCard/InfoCard";
import Icon from "../../../global components/Icon(clickable)/Icon";
import classes from "./DietPrefsSection.module.css";
import { icons } from "../../../../constants/constants";

const DietPrefsSection = ({ preferences }) => {
  return (
    <InfoCard
      header="Diet Preferences"
      isMatch={preferences.isMatch}
      subheader={
        preferences.isMatch
          ? "Product matches all your diet and lifestyle filters"
          : !preferences.isMatch
          ? "Product doesn't match all your diet filters"
          : "Can't determine compatibility"
      }
    > 
      {preferences.matchingOptions.map((option) => {
        return (
          <div key={`key${option.optionName}`} className={classes.optionWrap}>
            <Icon className={classes.icon} imageUrl={icons.MATCH_ICON} />
            {option.optionName}
          </div>
        );
      })}
      {preferences.unknownOptions.map((option) => {
        return (
          <div key={`key${option.optionName}`} className={classes.optionWrap}>
            <Icon className={classes.icon} imageUrl={icons.WARNING_ICON} />
            {option.optionName} - missing information
          </div>
        );
      })}
      {preferences.notMatchingOptions.map((option) => {
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

export default DietPrefsSection;

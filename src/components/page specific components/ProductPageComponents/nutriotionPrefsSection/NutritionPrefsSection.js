import InfoCard from "../InfoCard/InfoCard";
import Icon from "../../../global components/Icon(clickable)/Icon";
import classes from "./NutritionPrefsSection.module.css";
import { icons } from "../../../../constants/constants";

const NutritionPrefsSection = ({ preferences }) => {
  return (
    <InfoCard
      header="Nutritional Values Preferences"
      isMatch={preferences.isMatch}
      subheader={
        preferences.isMatch === true
          ? "Product matches all your diet and lifestyle filters"
          : preferences.isMatch === false
          ? "Product doesn't match all your diet filters"
          : preferences.isMatch === "no filters"
          ? "No filters set. Personalize your nutrition for a healthier life!"
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

export default NutritionPrefsSection;

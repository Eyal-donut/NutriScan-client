import InfoCard from "../../InfoCard/InfoCard";
import Icon from "../../Icon(clickable)/Icon";
import classes from "./DietPreferences.module.css";
import { icons } from "../../../constants/constants";

const DietPreferences = ({ dietPreferences }) => {
  return (
    <InfoCard
      header="Diet Preferences"
      isMatch={dietPreferences.isMatch}
      subheader={
        dietPreferences.isMatch
          ? "Product matches your diet and lifestyle filters"
          : !dietPreferences.isMatch
          ? "Product doesn't match your diet filters"
          : "Missing information to determine compatibility"
      }
    >
      {dietPreferences.matchingOptions.map((option) => {
        return (
          <div key={`key${option.optionName}`} className={classes.optionWrap}>
            <Icon
              className={classes.icon}
              imageUrl={
                dietPreferences.isMatch === true
                  ? icons.MATCH_ICON
                  : dietPreferences.isMatch === false
                  ? icons.NO_MATCH_ICON
                  : icons.WARNING_ICON
              }
            />
            {option.optionName}
          </div>
        );
      })}
    </InfoCard>
  );
};

export default DietPreferences;

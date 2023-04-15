import { useState } from "react";
import { icons } from "../../../constants/constants";
import classes from "./DropdownComponent.module.css";

import Icon from "../../Icon(clickable)/Icon";
import Checkbox from "../OptionInput/CheckBox/CheckBox";
import RangeSelection from "../OptionInput/RangeSelection/RangeSelection";

//This will be used for each category!
const DropdownComponent = ({ categoryIcon, headerText, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.wrap}>
      <div className={classes.headerWrap}>
        <div className={classes.CategoryIconAndName}>
          <Icon imageUrl={categoryIcon} />
          <h3 className={classes.h3}>{headerText}</h3>
        </div>
        <Icon
          imageUrl={icons.BACK_ICON}
          onBtnClick={() => setIsOpen(!isOpen)}
          className={isOpen ? classes.arrowDown : classes.arrowRight}
        />
      </div>
      {isOpen && (
        <ul className={classes.categoryWrap}>
          {options.map((option) => (
            <li key={option.name} className={classes.optionWrap}>
              <div className={classes.optionIconAndName}>
                <Icon
                  imageUrl={option.imageUrl}
                  className={classes.optionIcon}
                />
                {option.name}
              </div>
              {option.type === "checkbox" && <Checkbox val={option.value} />}
              {option.type === "range" && <RangeSelection val={option.value} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropdownComponent;

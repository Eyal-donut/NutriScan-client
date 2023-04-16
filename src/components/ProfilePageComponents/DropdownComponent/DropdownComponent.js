import { useState } from "react";
import { icons } from "../../../constants/constants";
import classes from "./DropdownComponent.module.css";

import Icon from "../../Icon(clickable)/Icon";
import Checkbox from "../CheckBox/CheckBox";
import RangeSelection from "../RangeSelection/RangeSelection";

const DropdownComponent = ({ categoryIcon, headerText, options, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.wrap}>
      <div className={classes.headerWrap}>
        <div className={classes.CategoryIconAndName}>
          {/* <Icon imageUrl={categoryIcon} className={classes.categoryIcon}/> */}
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
              {option.type === "checkbox" && (
                <Checkbox
                  val={option.value}
                  id={option.name}
                  optionName={option.name}
                  category={category}
                />
              )}
              {option.type === "range" && (
                <RangeSelection
                  val={option.value}
                  id={option.name}
                  optionName={option.name}
                  category={category}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropdownComponent;

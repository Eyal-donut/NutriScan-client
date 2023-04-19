import Icon from "../../../global components/Icon(clickable)/Icon";
import Checkbox from "../CheckBox/CheckBox";
import RangeSelection from "../RangeSelection/RangeSelection";
import classes from "./DropdownComponent.module.css";
import { useState } from "react";
import { icons } from "../../../../constants/constants";


const DropdownComponent = ({ headerText, options, category, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.wrap}>
      <div className={classes.headerWrap}>
        <div className={classes.nameAndDescription}>
          <h3 className={classes.h3}>{headerText}</h3>
          <h4 className={classes.h4}>{description}</h4>
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

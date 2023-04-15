import { useState } from "react";
import classes from "./DropdownComponent.module.css";
import Icon from "../../Icon(clickable)/Icon";

import { icons } from "../../../constants/constants";

//This will be used for each category!
const DropdownComponent = ({ icon, headerText, options, onOptionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option, optionType) => {
    setSelectedOption(option);
    onOptionClick(option, optionType);
  };

  return (
    <div className={classes.wrap}>
      <div className={classes.headerWrap}>
        <Icon imageUrl={icon} />
        <h3 className={classes.h3}>{headerText}</h3>
        <Icon
          imageUrl={icons.BACK_ICON}
          onBtnClick={() => setIsOpen(!isOpen)}
          className={isOpen ? classes.arrowDown : classes.arrowRight}
        />
      </div>
      {isOpen && (
        <ul className={classes.optionsWrap}>
          {options.map((option) => (
            <li key={option.name} className={classes.option}>
              {option.logo}
              {option.name}
              <ValueSetter type={option.type}/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropdownComponent;

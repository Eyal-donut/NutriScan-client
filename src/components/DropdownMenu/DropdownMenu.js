import React, { useState } from "react";
import classes from "./DropdownComponent.module.css";

const DropdownComponent = ({options, onSelect }) => {
  // const options = [{ label: "hi" }, { label: "hello" }];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={classes.dropdownComponent}>
      <div
        className={classes.dropdownComponentButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : "Select an option"}
        <i className={`fas fa-caret-${isOpen ? "up" : "down"}`}></i>
      </div>
      {isOpen && (
        <ul className={classes.dropdownComponentOptions}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={classes.dropdownComponentOption}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownComponent;

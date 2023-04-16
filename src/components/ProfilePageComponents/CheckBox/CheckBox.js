import classes from "./CheckBox.module.css";
import { useState } from "react";

const Checkbox = ({ val, id }) => {
  const [isOn, toggle] = useState(val);

  const onCheckBoxClick = () => {
    toggle(!isOn);
    //change the state with context
  };

  return (
    <label className={classes.wrap}>
      <input
        type="checkbox"
        defaultChecked={isOn}
        onClick={onCheckBoxClick}
        className={classes.input}
        id={id}
      ></input>
      <span className={classes.checkbox}/>
    </label>
  );
};
export default Checkbox;

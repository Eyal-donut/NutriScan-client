import classes from "./RangeSelection.module.css";

const RangeSelection = ({ val, id }) => {
  return (
    <div className={classes.range} id={id}>
      I will be range selection, my value:{val}
    </div>
  );
};
export default RangeSelection;

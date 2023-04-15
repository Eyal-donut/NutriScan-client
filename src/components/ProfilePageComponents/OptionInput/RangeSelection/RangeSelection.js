import classes from "./RangeSelection.module.css";

const RangeSelection = ({ val, onBtnClick }) => {
  return (
    <div className={classes.range}>
      I will be range selection, my value:{val}
    </div>
  );
};
export default RangeSelection;

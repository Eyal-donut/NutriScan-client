import classes from "./DeleteButton.module.css";

const DeleteButton = ({ onBtnClick, id }) => {
  return (
    <button className={classes.bgr} onClick={onBtnClick}>
      <div className={classes.iconDelete} id={id} />
    </button>
  );
};

export default DeleteButton;

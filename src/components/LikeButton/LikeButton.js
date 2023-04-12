import classes from "./LikeButton.module.css"

const LikeButton = ({ onBtnClick, isLiked }) => {
  return (
    <button className={classes.bgr} onClick={onBtnClick}>
      <div className={isLiked ? classes.liked : classes.notLiked} />
    </button>
  );
};

export default LikeButton;

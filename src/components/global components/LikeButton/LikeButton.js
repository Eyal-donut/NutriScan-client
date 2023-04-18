import classes from "./LikeButton.module.css"

const LikeButton = ({ onBtnClick, isLiked, id }) => {
  return (
    <button className={`like ${classes.bgr}`} onClick={onBtnClick} >
      <div className={isLiked ? classes.liked : classes.notLiked} id={id}/>
    </button>
  );
};

export default LikeButton;

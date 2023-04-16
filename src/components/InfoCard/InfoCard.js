import ContentWrap from "../ContentWrap/ContentWrap";
import classes from "./InfoCard.module.css";

const InfoCard = ({header, children, background, isMatch}) => {
  return (
    <div className={classes.wrap} style={{background:`${background}`}}>
      <ContentWrap width="85%" className={classes.contentWrap}>
        <h3>{header}</h3>
        <div className={classes.details}>
          {children}
        </div>
      </ContentWrap>
    </div>
  );
};
export default InfoCard;

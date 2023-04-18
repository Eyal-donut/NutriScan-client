import ContentWrap from "../../../global components/ContentWrap/ContentWrap";
import classes from "./InfoCard.module.css";

const InfoCard = ({ header, children, isMatch, subheader }) => {
  return (
    <div
      className={`${classes.wrap} ${
        isMatch
          ? classes.wrapMatch
          : !isMatch
          ? classes.wrapNoMatch
          : classes.wrapUnknownMatch
      } `}
    >
      <ContentWrap width="85%" className={classes.contentWrap}>
        <h3>{header}</h3>
        <h4
          className={
            isMatch === true
              ? classes.h4_Match
              : isMatch === false
              ? classes.h4_NoMatch

              : classes.isMatch === "Unknown" ?
              classes.h4_UnknownMatch :
              classes.h4_noFilter
          }
        >
          {subheader}
        </h4>
        <div className={classes.details}>{children}</div>
      </ContentWrap>
    </div>
  );
};
export default InfoCard;

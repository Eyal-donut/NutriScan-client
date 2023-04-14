import PageHeader from "../PageHeader/PageHeader";
import Button from "../Button/Button";
import classes from "./MyScansHeader.module.css";

const MyScansHeader = ({ handleNavButtons }) => {
  return (
    <>
      <PageHeader>
        <Button
          className={classes.button}
          onBtnClick={handleNavButtons}
          text="All Scans"
          id="all-scans-btn"
        ></Button>
        <Button
          className={classes.button}
          onBtnClick={handleNavButtons}
          text="Liked Products"
          id="liked-products-btn"
        ></Button>
        <Button
          className={classes.button}
          onBtnClick={handleNavButtons}
          text="Filters"
          id="filters-btn"
        ></Button>
      </PageHeader>
    </>
  );
};

export default MyScansHeader;

import Icon from "../Icon(clickable)/Icon";
import { Link } from "react-router-dom";
import { icons } from "../../constants/constants";
import classes from "./ProductPageHeader.module.css"

const ProductPageHeader = ({name}) => {
  return (
    <div className={classes.wrap}>
      <Link to=".." relative="path">
        <Icon imageUrl={icons.BACK_ICON} />
      </Link>
      <p>{name}</p>
    </div>
  );
};

export default ProductPageHeader

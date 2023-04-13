import Icon from "../Icon(clickable)/Icon";
import { Link } from "react-router-dom";
import { icons } from "../../constants/constants";
import classes from "./ProductPageHeader.module.css";
import { useProductContext } from "../../context/ProductContext";

const ProductPageHeader = () => {
  const { currentProduct } = useProductContext();
  return (
    <div className={classes.wrap}>
      <Link to=".." relative="path" className={classes.icon}>
        <Icon imageUrl={icons.BACK_ICON} />
      </Link>
      <div className={classes.name}>{currentProduct.name}</div>
    </div>
  );
};

export default ProductPageHeader;

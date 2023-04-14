import Icon from "../Icon(clickable)/Icon";
import { useNavigate } from "react-router-dom";
import { icons } from "../../constants/constants";
import classes from "./ProductPageHeader.module.css";
import { useProductContext } from "../../context/ProductContext";

const ProductPageHeader = () => {
  const { currentProduct } = useProductContext();
  const navigate = useNavigate()
  return (
    <div className={classes.wrap}>
        <Icon imageUrl={icons.BACK_ICON} onBtnClick={()=>{navigate(-1)}} className={classes.icon}/>
      <div className={classes.name}>{currentProduct.name}</div>
    </div>
  );
};

export default ProductPageHeader;

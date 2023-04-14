import classes from "./ProductPageHeader.module.css";
import Icon from "../Icon(clickable)/Icon";
import PageHeader from "../PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";
import { icons } from "../../constants/constants";
import { useProductContext } from "../../context/ProductContext";

const ProductPageHeader = () => {
  const { currentProduct } = useProductContext();
  const navigate = useNavigate()
  return (
    <PageHeader>
        <Icon imageUrl={icons.BACK_ICON} onBtnClick={()=>{navigate(-1)}} className={classes.icon}/>
      <div className={classes.name}>{currentProduct.name}</div>
    </PageHeader>
  );
};

export default ProductPageHeader;

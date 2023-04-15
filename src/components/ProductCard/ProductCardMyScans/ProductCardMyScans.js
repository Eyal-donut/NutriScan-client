import classes from "./ProductCardMyScans.module.css";

import { useState } from "react";
import LikeButton from "../LikeButton/LikeButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import ProductImage from "../ProductImage/ProductImage";
import IsMatchBar from "../../IsMatchBar/IsMatchBar"
import { constants } from "../../../constants/constants";
import { useBarcodeAndProduct } from "../../../hooks/useBarcodeAndProduct";
import { useLoggedUser } from "../../../hooks/useLoggedUser";

const ProductCardMyScans = ({ product, page, onBtnClick }) => {

  const { updateMyScanCard } = useBarcodeAndProduct();
  const {deleteLocalUserProduct} = useLoggedUser()
  const [isLiked, setIsLiked] = useState(product.isLiked);

  const clickHandler = (e) => {
    if (e.target.className.includes("LikeButton")) {
      updateMyScanCard(Number(e.target.id), "isLiked", !isLiked);
      setIsLiked((prevState) => !prevState);
      
    } else if (e.target.className.includes("DeleteButton")) {
      updateMyScanCard(Number(e.target.id), "delete");
      deleteLocalUserProduct(Number(e.target.id))
    }
    onBtnClick(e)
  };
    return (
      <div className={classes.wrap}>
          <ProductImage
            page={page}
            imageUrl={
              product.source === constants.APP_NAME
                ? product.imageUrl
                : product.source === constants.OPEN_FOOD_API
                ? product.product.image_url
                : ""
            }
          />
          <ul className={classes.productDetails}>
            <li className={classes.li}>{product.name}</li>
            <li className={classes.li}>{product.company}</li>
            <IsMatchBar page="my-scans" />
          </ul>
          <div className={classes.buttonsWrap}>
            <LikeButton
              onBtnClick={clickHandler}
              isLiked={isLiked}
              id={product.code}
            />
            <DeleteButton
              onBtnClick={clickHandler}
              isLiked={isLiked}
              id={product.code}
            />
          </div>
      </div>
    );
};

export default ProductCardMyScans;

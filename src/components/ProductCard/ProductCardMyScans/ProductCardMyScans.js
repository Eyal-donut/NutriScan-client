import classes from "./ProductCardMyScans.module.css";

import { useState } from "react";
import LikeButton from "../LikeButton/LikeButton";
import ProductImage from "../ProductImage/ProductImage";
import ContentWrap from "../../ContentWrap/ContentWrap";
import { useProductContext } from "../../../context/ProductContext";
import { constants } from "../../../constants/constants";
import { useBarcodeAndProduct } from "../../../hooks/useBarcodeAndProduct";

const ProductCardMyScans = ({ product, page }) => {

  const { updateMyScanCard } = useBarcodeAndProduct();
  const [isLiked, setIsLiked] = useState(product.isLiked);

  const clickHandler = (e) => {
    if (e.target.className.includes("LikeButton")) {
      updateMyScanCard(Number(e.target.id), "isLiked");
      setIsLiked((prevState) => !prevState);
    }
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
            <h3>{product.name}</h3>
            <h3>{product.company}</h3>
          </ul>
          <div className={classes.buttonsWrap}>
            <LikeButton
              onBtnClick={clickHandler}
              isLiked={isLiked}
              id={product.code}
            />
            <LikeButton
              onBtnClick={clickHandler}
              isLiked={isLiked}
              id={product.code}
            />
          </div>
      </div>
    );
};

export default ProductCardMyScans;

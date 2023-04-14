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
          <div className={classes.details}>
            {product.name}
          </div>
          <div className={classes.nameAndLikeBtn}>
            <h3 className={classes.h3}>{product.name}</h3>
            <LikeButton
              onBtnClick={clickHandler}
              isLiked={isLiked}
              id={product.code}
            />
          </div>
          <ul className={classes.productDetails}>
            <h3 className={classes.h3}>Product details</h3>
            <li className={classes.li}>Category: {product.category}</li>
            <li className={classes.li}>Manufacturer: {product.company}</li>
          </ul>
      </div>
    );
};

export default ProductCardMyScans;

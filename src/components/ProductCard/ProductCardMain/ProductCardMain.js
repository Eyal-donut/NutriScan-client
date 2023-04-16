import classes from "./ProductCardMain.module.css";

import { useState } from "react";
import LikeButton from "../LikeButton/LikeButton";
import ProductImage from "../ProductImage/ProductImage";
import ContentWrap from "../../ContentWrap/ContentWrap";
import { useProductContext } from "../../../context/ProductContext";
import { constants } from "../../../constants/constants";
import { useBarcodeAndProduct } from "../../../hooks/useBarcodeAndProduct";
import { useLoggedUser } from "../../../hooks/useLoggedUser";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

const ProductCardMain = ({page}) => {
  const { currentProduct, productSource } = useProductContext();

  const { updateProductAndSetCurrent } = useBarcodeAndProduct();
  const { updateLocalAndLoggedUser } = useLoggedUser();
  const { getLocalStorageItem } = useLocalStorage();

  const [isLiked, setIsLiked] = useState(currentProduct.isLiked);

  const clickHandler = (e) => {
    if (e.target.className.includes("LikeButton")) {
      updateProductAndSetCurrent(currentProduct, "isLiked", !isLiked);
      setIsLiked((prevState) => !prevState);
      updateLocalAndLoggedUser(
        undefined,
        "singleProduct",
        getLocalStorageItem("currentProduct")
      );
    }
  };
  return (
    <div className={classes.wrap}>
      <ContentWrap width="85%">
        <ProductImage
          imageUrl={
            productSource === constants.APP_NAME
              ? currentProduct.imageUrl
              : productSource === constants.OPEN_FOOD_API
              ? currentProduct.product.image_url
              : ""
          }
          page={page}
        />
        <div className={classes.nameAndLikeBtn}>
          <h3 className={classes.h3}>{currentProduct.name}</h3>
          <LikeButton onBtnClick={clickHandler} isLiked={isLiked} />
        </div>
        <ul className={classes.productDetails}>
          <h3 className={classes.h3}>Product details</h3>
          <li className={classes.li}>Category: {currentProduct.category}</li>
          <li className={classes.li}>Manufacturer: {currentProduct.company}</li>
        </ul>
      </ContentWrap>
    </div>
  );
};

export default ProductCardMain;

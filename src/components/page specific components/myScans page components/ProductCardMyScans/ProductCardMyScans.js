import classes from "./ProductCardMyScans.module.css";
import LikeButton from "../../../global components/LikeButton/LikeButton";
import DeleteButton from "../../../global components/DeleteButton/DeleteButton";
import ProductImage from "../../../global components/ProductImage/ProductImage";
import IsMatchBar from "../../../global components/IsMatchBar/IsMatchBar";
import { useState } from "react";
import { constants } from "../../../../constants/constants";
import { useBarcodeAndProduct } from "../../../../hooks/useBarcodeAndProduct";
import { useLoggedUser } from "../../../../hooks/useLoggedUser";
import { useNavigate } from "react-router-dom";
import { useUserSettings } from "../../../../hooks/useUserSettings/useUserSettings";

const ProductCardMyScans = ({ product, page, onBtnClick }) => {
  const { updateMyScanCard, getFromLocalAndSetCurrent } =
    useBarcodeAndProduct();
  const { deleteLocalUserProduct } = useLoggedUser();
  const [isLiked, setIsLiked] = useState(product.isLiked);
  const { isProductMatch } = useUserSettings();
  const navigate = useNavigate();

  const clickHandler = (e) => {
    if (e.target.className.includes("LikeButton")) {
      updateMyScanCard(Number(e.target.id), "isLiked", !isLiked);
      setIsLiked((prevState) => !prevState);
    } else if (e.target.className.includes("DeleteButton")) {
      updateMyScanCard(Number(e.target.id), "delete");
      deleteLocalUserProduct(Number(e.target.id));
    }
    onBtnClick(e);
  };

  const onCardClick = (e) => {
    if (
      !e.target.className.includes("LikeButton") &&
      !e.target.className.includes("DeleteButton")
    ) {
      getFromLocalAndSetCurrent(product.code);
      navigate("/product");
    }
  };
  return (
    <div
      className={`${classes.wrap} ${
        isProductMatch === true
          ? classes.wrapYes
          : isProductMatch === false
          ? classes.wrapNo
          : isProductMatch === "Unknown"
          ? classes.wrapUnknown
          : classes.wrapNoFilters
      }`}
      onClick={onCardClick}
    >
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
        <IsMatchBar page="my-scans" isMatch={isProductMatch} />
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

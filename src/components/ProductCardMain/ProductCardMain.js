import classes from "./ProductCardMain.module.css";

import { useState } from "react";
import LikeButton from "../ModifiableButton/LikeButton";
import ProductImage from "../ProductImage/ProductImage";
import { useProductContext } from "../../context/ProductContext";

const ProductCardMain = () => {
  const { currentProduct } = useProductContext();
  const [isLiked, setIsLiked] = useState(currentProduct.isLiked);

  const clickHandler = () => {
    //click will change in current product the isLiked prop
  };

  return (
    <>
      <ProductImage imageUrl={currentProduct.imageUrl}/>
      <LikeButton onBtnClick={clickHandler} isLiked={isLiked} />
    </>
  );
};

export default ProductCardMain;

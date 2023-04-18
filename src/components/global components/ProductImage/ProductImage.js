import classes from "./ProductImage.module.css";

const ProductImage = ({ imageUrl, page }) => {
  return (
    <div
      className={page === "product" ? classes.imageProductPage : classes.imageMyScansPage}
      style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
    />
  );
};

export default ProductImage;

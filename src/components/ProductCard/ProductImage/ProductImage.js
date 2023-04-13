import classes from "./ProductImage.module.css";

const ProductImage = ({ imageUrl }) => {
  return (
    <div
      className={classes.image}
      style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
    />
  );
};

export default ProductImage;

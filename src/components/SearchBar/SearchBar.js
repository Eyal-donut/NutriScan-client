import classes from "./SearchBar.module.css";

const SearchBar = ({ products, onInputChange }) => {

  const inputHandler = (e) => {
    const currentProducts = products.filter((prod) => {
      const productDetails = (
        prod.name +
        String(prod.code) +
        prod.company
      ).toLowerCase();
      return productDetails.includes(e.target.value.toLowerCase());
    });
    onInputChange(currentProducts);
  };

  return (
    <div className={classes.searchBarWrap}>
      <label htmlFor="search">Search Product:</label>
      <input
        className={classes.input}
        name="search"
        type="text"
        onChange={inputHandler}
        placeholder='Name / Barcode / Manufacturer'
      />
    </div>
  );
};

export default SearchBar;

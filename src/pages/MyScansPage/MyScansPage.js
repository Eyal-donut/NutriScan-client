import { useEffect, useState } from "react";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import ProductCardMyScans from "../../components/ProductCard/ProductCardMyScans/ProductCardMyScans";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import SearchBar from "../../components/SearchBar/SearchBar";
import MyScansHeader from "../../components/MyScansHeader/MyScansHeader";

const MyScansPage = () => {
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const { getItemProperty } = useLocalStorage();

  const [myScans, setMyScans] = useState(() =>
    getItemProperty("loggedUser", "products")
  );
  const [shownScans, setShownScans] = useState(myScans);

  const handleDelete = () => {
    setMyScans(getItemProperty("loggedUser", "products"));
  };
  const handleSearch = (filteredBySearch) => {
    setShownScans(filteredBySearch);
  };

  const handleNavButtons = (e) => {
    if (e.target.id === "liked-products-btn") {
      setShownScans(myScans.filter((prod) => prod.isLiked === true));
    }
    if (e.target.id === "all-scans-btn") {
      setShownScans(myScans);
    }
  };

  useEffect(() => {
    checkCameraAndRefresh();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <MyScansHeader handleNavButtons={handleNavButtons} />
      <SearchBar onInputChange={handleSearch} products={myScans} />
      {shownScans.map((scan) => {
        return (
          <ProductCardMyScans
            product={scan}
            page="my-scans"
            key={scan.code}
            onDelete={handleDelete}
          />
        );
      })}
    </>
  );
};
export default MyScansPage;

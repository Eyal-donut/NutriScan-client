import { useEffect, useState } from "react";
import { useCheckCameraAndRefresh } from "../../hooks/useCheckCameraAndRefresh ";
import ProductCardMyScans from "../../components/ProductCard/ProductCardMyScans/ProductCardMyScans";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import PageHeader from "../../components/PageHeader/PageHeader";
import Button from "../../components/Button/Button";
import classes from "./MyScansPage.module.css"

const MyScansPage = () => {
  const { checkCameraAndRefresh } = useCheckCameraAndRefresh();
  const { getItemProperty } = useLocalStorage();

  const [myScans, setMyScans] = useState(() =>
    getItemProperty("loggedUser", "products")
  );

  const handleDelete = () => {
    setMyScans(getItemProperty("loggedUser", "products"))
  }

  useEffect(() => {
    checkCameraAndRefresh()

    // eslint-disable-next-line
  }, []);

  return (
    <>
    <PageHeader>
      <Button className={classes.button}></Button>
      <Button className={classes.button}></Button>
      <Button className={classes.button}></Button>
    </PageHeader>
      {myScans.map((scan) => {
        return <ProductCardMyScans product={scan} page="my-scans" key={scan.code} onDelete={handleDelete}/>;
      })}
    </>
  );
};
export default MyScansPage;

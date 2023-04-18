import Navbar from "../components/global components/Navbar/Navbar";
import Menu from "./MenuPage/Menu"
import { Outlet } from "react-router-dom";
import { useMenuDisplayContext } from "../context/loggedUserContext copy";

const Root = () => {
  const {isMenuDisplay} = useMenuDisplayContext()
  return (
    <>
      <Navbar />
      <Outlet />
      <Menu isMenuDisplay={isMenuDisplay}/>
    </>
  );
};
export default Root;

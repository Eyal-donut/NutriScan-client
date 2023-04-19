import { NavLink, useLocation } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useMenuDisplayContext } from "../../../context/MenuDisplayContext";

const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const { isMenuDisplay, setIsMenuDisplay } = useMenuDisplayContext();

  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive && !isMenuDisplay
                  ? classes.activeLinkWrap
                  : classes.linkWrap
              }
            >
              <div
                className={
                  pathName === "/" && !isMenuDisplay
                    ? classes.activeScanner
                    : classes.scanner
                }
              ></div>
              Scanner
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink
              to="/my-scans"
              className={({ isActive }) =>
                isActive && !isMenuDisplay
                  ? classes.activeLinkWrap
                  : classes.linkWrap
              }
              end
            >
              <div
                className={
                  pathName === "/my-scans" && !isMenuDisplay
                    ? classes.activeMyScans
                    : classes.myScans
                }
              />
              My Scans
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive && !isMenuDisplay
                  ? classes.activeLinkWrap
                  : classes.linkWrap
              }
              end
            >
              <div
                className={
                  pathName === "/profile" && !isMenuDisplay
                    ? classes.activeProfile
                    : classes.profile
                }
              />
              Profile
            </NavLink>
          </li>
          <li
            className={classes.li}
            onClick={() => {
              setIsMenuDisplay(true);
            }}
          >
            <div
              className={
                isMenuDisplay ? classes.activeLinkWrap : classes.linkWrap
              }
            >
              <div
                className={isMenuDisplay ? classes.activeMenu : classes.menu}
              />
              Menu
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

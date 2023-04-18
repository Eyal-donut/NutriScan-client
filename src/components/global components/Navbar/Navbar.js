import { NavLink, useLocation } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? classes.activeLinkWrap : classes.linkWrap
              }
            >
              <div
                className={
                  pathName === "/" ? classes.activeScanner : classes.scanner
                }
              ></div>
              Scanner
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink
              to="/my-scans"
              className={({ isActive }) =>
                isActive ? classes.activeLinkWrap : classes.linkWrap
              }
              end
            >
              <div
                className={
                  pathName === "/my-scans"
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
                isActive ? classes.activeLinkWrap : classes.linkWrap
              }
              end
            >
              <div
                className={
                  pathName === "/profile"
                    ? classes.activeProfile
                    : classes.profile
                }
              />
              Profile
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? classes.activeLinkWrap : classes.linkWrap
              }
              end
            >
              <div
                className={
                  pathName === "/menu" ? classes.activeMenu : classes.menu
                }
              />
              Menu
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

import { NavLink, useLocation } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  console.log(pathName);
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <div
                className={
                  pathName === "/" ? classes.activeScanner : classes.scanner
                }
              />
              <p>Scanner</p>
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink
              to="/my-scans"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
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
              <p>My Scans</p>
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
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
              <p>Profile</p>
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <div
                className={
                  pathName === "/menu" ? classes.activeMenu : classes.menu
                }
              />
              <p>Menu</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

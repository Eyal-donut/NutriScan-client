import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
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
              Scanner
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
              My Scans
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
              Profile
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
              Menu
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

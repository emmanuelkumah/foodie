import React from "react";
import logo from "./foodLogo.png";
import classes from "./NavBar.module.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

function NavBar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} alt="food-logo" />
      </div>
      <ul className={classes.nav__menu}>
        <li className={classes.menu__item}>Home</li>
        <li className={classes.menu__item}>About</li>
        <li className={classes.menu__item}>Services</li>
        <li className={classes.menu__item}>Menu</li>
      </ul>
      <div>
        <IconContext.Provider value={{ color: "white" }}>
          <FaShoppingCart className={classes.nav__icons} />
          <FaSearch className={classes.nav__icons} />
        </IconContext.Provider>
      </div>
    </nav>
  );
}

export default NavBar;

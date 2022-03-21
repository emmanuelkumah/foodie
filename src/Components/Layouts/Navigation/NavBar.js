import React from "react";
import logo from "./food-logo.png";
import classes from "./NavBar.module.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="food-logo" />
      </div>
      <ul className="nav-menu">
        <li className="menu-item">Home</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Services</li>
        <li className="menu-item">Menu</li>
      </ul>
      <div>
        <FaShoppingCart />
        <FaSearch />
      </div>
    </nav>
  );
}

export default NavBar;

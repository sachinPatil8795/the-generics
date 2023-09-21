import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <ul>
          <li>
            <NavLink activeclassname={classes.active} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname={classes.active} to="/store">
              Store
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname={classes.active} to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname={classes.active} to="/contact">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname={classes.active} to="/authform">
            <button className={classes['login-btn']}>Login</button>
            </NavLink>
          </li>
        </ul>
        <HeaderCartButton cartItems={props.cartItems} />
      </header>
      <div className={classes.title}>
        <h1>The Generics</h1>
      </div>
    </>
  );
};

export default Header;

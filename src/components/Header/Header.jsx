import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li className={classes.active}>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
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

import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <ul>
          <li>Home</li>
          <li className={classes.active}>Store</li>
          <li>About us</li>
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

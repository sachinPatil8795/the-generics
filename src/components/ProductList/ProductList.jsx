import React from "react";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <>
      <h2 className={classes["music-title"]}>Music</h2>
      <div className={classes.container}>
        {props.productData.map((product) => (
          <div className={classes.product} key={Math.random()}>
            <img src={product.imageUrl} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button>+ Add</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;

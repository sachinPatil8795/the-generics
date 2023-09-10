// ProductList.js
import React from "react";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <>
    <section>
      <h2 className={classes["music-title"]}>Music</h2>
      <div className={classes.container}>
        {props.productData.map((product) => (
          <div className={classes.product} key={product.title}>
            <img src={product.imageUrl} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => props.onAddItem(product)}>+ Add</button>
          </div>
        ))}
      </div>
      </section>
    </>
  );
};

export default ProductList;

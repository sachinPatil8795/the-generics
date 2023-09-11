// ProductList.js
import React, { useState } from "react";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  const [alertMessage, setAlertMessage] = useState(""); // State for the alert message

  const handleAddItemClick = (product) => {
    props.onAddItem(product);

    setAlertMessage(`Product: ${product.title} has been added to the cart.`);

    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };
 
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
              <button onClick={() => handleAddItemClick(product)}>+ Add</button>
            </div>
          ))}
        </div>
      </section>
      {/* Display the alert message */}
      {alertMessage && <div className={classes.alert}>{alertMessage}</div>}
    </>
  );
};

export default ProductList;

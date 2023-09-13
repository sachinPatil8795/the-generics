import React, { useState } from "react";
import classes from "./ProductList.module.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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
            <div className={classes.product} key={product.id}>
              {/* Use Link to navigate to the product detail page */}
              <Link to={`/store/${product.id}`}>
                <img src={product.imageUrl} alt={product.title} />
              </Link>
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

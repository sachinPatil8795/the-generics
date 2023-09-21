// ProductDetail.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const [alertMessage, setAlertMessage] = useState(""); // State for the alert message

  const handleAddItemClick = (product) => {
    props.onAddItem(product);

    setAlertMessage(`Product: ${product.title} has been added to the cart.`);

    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };

  const { productId } = useParams();
  const product = props.products.find((item) => item.id === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <section>
        <h2 className={classes.header}>Product Details</h2>
        <div className={classes.productDetail}>
          <img src={product.imageUrl} alt={product.title} />
          <div className={classes.productInfo}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            {/* <p>Quantity: {product.quantity}</p> */}
            <button onClick={() => handleAddItemClick(product)}>
              ADD TO CART
            </button>
            <p>
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
        </div>
      </section>
      {alertMessage && <div className={classes.alert}>{alertMessage}</div>}
    </>
  );
};

export default ProductDetails;

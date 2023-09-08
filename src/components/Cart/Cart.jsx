// Cart.js
import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = props.cartItems;
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Modal>
      <div className={classes.cart}>
        <h2 className={classes["cart-header"]}>Shopping Cart</h2>
        {cartItems.map((item) => (
          <div key={item.title} className={classes["cart-item"]}>
            <div className={classes["item-details"]}>
              <img src={item.imageUrl} alt="music" />
              <p className={classes["item-title"]}>
                Item: <strong>{item.title}</strong>
              </p>
              <p className={classes["item-price"]}>Price: ${item.price}</p>
              <p className={classes["item-quantity"]}>
                Quantity: {item.quantity}
              </p>
            </div>
            <button
              className={classes["delete-button"]}
              onClick={() => props.onRemoveItem(item.title)}
            >
              Delete
            </button>
          </div>
        ))}
        <div className={classes.total}>
          <p>Total Price: ${totalAmount.toFixed(2)}</p>
        </div>
        <div className={classes.btn}>
          <button>Order</button>
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;

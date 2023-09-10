import { useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { ModalContext } from "../../App";

const HeaderCartButton = (props) => {
  const cartModalContext = useContext(ModalContext);
  
  // Calculate the total quantity of items in the cart
  const cartQuantity = props.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <button className={classes.button} onClick={cartModalContext}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;

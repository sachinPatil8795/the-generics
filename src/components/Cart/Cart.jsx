
import classes from './Cart.module.css'

const Cart = (props) => {
  // const [cartItems, setCartItems] = useState([
  //   { id: 1, title: 'Item 1', price: 10, quantity: 2 },
  //   { id: 2, title: 'Item 2', price: 15, quantity: 1 },
  //   { id: 3, title: 'Item 3', price: 20, quantity: 3 },
  // ]);

  // const calculateTotal = () => {
  //   return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // };

  // const removeFromCart = (itemId) => {
  //   const updatedCart = cartItems.filter((item) => item.id !== itemId);
  //   setCartItems(updatedCart);
  // };

  return (
    <div className={classes.cart}>
      <h2 className={classes['cart-header']}>Shopping Cart</h2>
      {props.cartItems.map((item) => (
        <div key={item.id} className={classes['cart-item']}>
          <div className={classes["item-details"]}>
            <p className={classes["item-title"]}>{item.title}</p>
            <p className={classes["item-price"]}>Price: ${item.price}</p>
            <p className={classes["item-quantity"]}>Quantity: {item.quantity}</p>
          </div>
          <button className={classes["delete-button"]}>Delete</button>
        </div>
      ))}
      <div className={classes.total}>
        <p>Total Price: ${199}</p>
      </div>

      <div className={classes.btn}>
        <button>Order</button>
        <button>close</button>
      </div>
    </div>
  );
};

export default Cart;

// App.js
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import { CartContext } from "./store/cart-context";

const storeList = [
  {
    title: "Colors",
    price: 12.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and White Colors",
    price: 14.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 8,
  },
  {
    title: "Yellow and Black Colors",
    price: 9.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 6,
  },
  {
    title: "Blue Color",
    price: 19.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 4,
  },
  {
    title: "Coffee",
    price: 19.99,
    imageUrl: "	https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
    quantity: 4,
  },
  {
    title: "T-Shirt",
    price: 19.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    quantity: 4,
  },
];

export const ModalContext = React.createContext();

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const existingItemIndex = prevItems.findIndex(
        (item) => item.title === product.title
      );

      if (existingItemIndex !== -1) {
        // If the item is already in the cart, update its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity++;
        return updatedItems;
      } else {
        // If the item is not in the cart, add it
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (title) => {
    setCartItems((prevItems) => {
      // Remove the item from the cart
      const updatedItems = prevItems.filter((item) => item.title !== title);
      return updatedItems;
    });
  };

  const showCartItemHandler = () => {
    setCartIsShown(true);
  };

  const hideCartItemHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
      }}
    >
      {cartIsShown && (
        <Cart
          cartItems={cartItems}
          onClose={hideCartItemHandler}
          onRemoveItem={removeItemFromCart}
        />
      )}
      <ModalContext.Provider value={showCartItemHandler}>
        <Header cartItems={cartItems} />
      </ModalContext.Provider>
      <main>
        <ProductList productData={storeList} onAddItem={addItemToCart} />
      </main>
    </CartContext.Provider>
  );
};

export default App;

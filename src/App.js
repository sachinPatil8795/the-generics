// App.js
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { CartContext } from "./store/cart-context";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Routes/Home";
import Store from "./components/Routes/Store";
import About from "./components/Routes/About";

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

      <Routes>
        {/* <ProductList productData={storeList} onAddItem={addItemToCart} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store onAddItem={addItemToCart} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </CartContext.Provider>
  );
};

export default App;

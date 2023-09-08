import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

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
];

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(true);

  const showCartItemHandler = () => {
    setCartIsShown(true);
  }

  const hideCartItemHandler = () => {
    setCartIsShown(false);
  }
  return (
    <div>
      {cartIsShown && <Cart cartItems={storeList}/>}
      <Header />
      <main>
        <ProductList productData={storeList} />
      </main>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';

const productsArr = [
  {
    title: 'Colors',
    price: 12.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and White Colors',
    price: 14.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 9.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 19.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>HOME</li>
            <li>STORE</li>
            <li>ABOUT</li>
            <li>CART {cart.length}</li>
          </ul>
        </nav>
      </header>
      <div className="store">
        <h1>Store</h1>
        <div className="products">
          {productsArr.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.imageUrl} alt={product.title} />
              <h2>{product.title}</h2>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>ADD TO CART</button>
            </div>
          ))}
        </div>
        <button className="cart-button" onClick={() => console.log('See Cart')}>See Cart</button>
      </div>
      {/* <footer>
        <div className="store-name">The Generics</div>
        <div className="social-links">
          <a href="https://www.youtube.com/">YouTube</a>
          <a href="https://www.instagram.com/">Instagram</a>
        </div>
      </footer> */}
    </div>
  );
}

export default App;

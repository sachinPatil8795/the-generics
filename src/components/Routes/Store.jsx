import React from 'react'
import ProductList from '../ProductList/ProductList';

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
      price: 9.99,
      imageUrl: "	https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
      quantity: 4,
    },
    {
      title: "T-Shirt",
      price: 29.99,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
      quantity: 4,
    },
  ];

const Store = (props) => {
  return (
    <div>
      <ProductList productData={storeList} onAddItem={props.onAddItem} />
    </div>
  )
}

export default Store

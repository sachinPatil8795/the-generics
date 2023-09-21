import React from "react";
import ProductList from "../../ProductList/ProductList";


const storeList = [
  {
    id: "p1",
    title: "Colors",
    price: 12.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: "p2",
    title: "Black and White Colors",
    price: 14.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 8,
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 9.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 6,
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 19.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 4,
  },
  {
    id: "p5",
    title: "Coffee Cup",
    price: 9.99,
    imageUrl: "	https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
    quantity: 4,
  },
  {
    id: "p6",
    title: "T-Shirt",
    price: 29.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    quantity: 4,
  },
  {
    id: "p7",
    title: "Black and White Colors",
    price: 14.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 8,
  },

  {
    id: "p8",
    title: "Colors",
    price: 12.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: "p9",
    title: "Blue Color",
    price: 19.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 4,
  },
];

const Store = (props) => {
  return (
    <div>
      <ProductList productData={storeList} onAddItem={props.onAddItem} />
    </div>
  );
};

export default Store;

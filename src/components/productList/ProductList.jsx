import React, { useState } from "react";
import products from "../../api/products.json";
import AfterCart from "./CartButtons/AfterCart";
import BeforeCart from "./CartButtons/BeforeCart";
import { useSelector } from "react-redux";
import "./ProductList.css";
const ProductList = () => {
  const cart = useSelector((state) => state.cart);
  const [count, setCount] = useState(0);
  const addToCart = () => {
    setCount(1);
  };

  console.log(cart);

  return (
    <section className='container'>
      {products?.map((product, key) => (
        <div className='product-container' key={key}>
          <img src={product?.image} alt='mobile-img' />
          <h3>{product?.title}</h3>

          {count > 0 ? <AfterCart /> : <BeforeCart addToCart={addToCart} />}
        </div>
      ))}
    </section>
  );
};

export default ProductList;

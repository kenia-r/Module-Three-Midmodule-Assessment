import React from "react";

const ShoppingCart = ({ cart, total }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
          {cart.map()}
      </ul>
    </div>
  );
};

export default ShoppingCart;

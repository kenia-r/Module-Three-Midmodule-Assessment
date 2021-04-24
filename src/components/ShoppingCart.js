import React from "react";

const ShoppingCart = ({ cart, totalPrice }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
          {cart.map()}
      </ul>
      <h3>Subtotal: </h3>
      <h3>Tax: </h3>
      <h3>Total: </h3>
    </div>
  );
};

export default ShoppingCart;

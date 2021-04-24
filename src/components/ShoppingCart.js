import React from "react";

const ShoppingCart = ({ cart, subTotal, tax, totalPrice }) => {

  return (
    <div>
      <h2>Cart</h2>
      <ul>
          {cart.map(added => <li>{added.name}: ${added.price.toFixed(2)}</li>)}
      </ul>
      <h3>Subtotal: ${subTotal.toFixed(2)}</h3>
      <h3>Tax: ${tax}</h3>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default ShoppingCart;

import React from "react";
import "./App.css";
import CheckoutForm from "./components/CheckoutForm";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import productData from "./data/productData";

class App extends React.Component {
  state = { products: productData, cart: [] };

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  render() {
    const { cart } = this.state;
    const subTotal = cart.reduce((sum, added) => sum + added.price, 0)
    const tax = (subTotal * .05).toFixed(2)
    const totalPrice = 5

    return(
      <div className="App">
        <div className="Shopping">
        <h1>My Garage Sale</h1>
        <ProductsList products={productData} addToCart={this.addToCart}/>
        </div>
        <div className="CheckingOut">
          <ShoppingCart cart={this.state.cart} subTotal={subTotal} tax={tax} totalPrice={totalPrice}/>
          <CheckoutForm subTotal={subTotal || 0}/>
        </div>
      </div>
    )
    
  }
}

export default App;

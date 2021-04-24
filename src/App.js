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
      cart: [...prevState, product],
    }));
  };

  render() {
    return(
      <div className="App">
        <div className="Shopping">
        <h1>My Garage Sale</h1>
        <ProductsList products={productData} addToCart={this.addToCart}/>
        </div>;
        <div className="CheckingOut">
          <ShoppingCart/>
          <CheckoutForm/>
        </div>
      </div>
    )
    
  }
}

export default App;

import React from "react";
import "./App.css";
import ProductsList from "./components/ProductsList";
import productData from "./data/productData";

class App extends React.Component {
  state = { products: productData, cart: [] }

  render() {
    return(
      <div>Hello World!</div>
    )
  }
}

export default App;

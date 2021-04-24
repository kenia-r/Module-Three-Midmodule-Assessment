import React from "react";
import Product from "./Product";

const ProductsList = ({ products, addToCart }) => {
return(
    <ul className="Products">
        {products.map((product) => {
            return <Product key={product.id} product={product} addToCart={addToCart}/>
        })}
    </ul>
    )
}

export default ProductsList
import React from "react";

const Product = ({product, addToCart}) => {
 const { name, price, description, img } = product;

 return(
     <li>
         <h3>{name}</h3>
         Price: {price}
         <button onClick={() => addToCart(product)}>Add To Cart</button>
         <img src={img} alt="product"/>
         <p>{description}</p>
     </li>
 )
}

export default Product;
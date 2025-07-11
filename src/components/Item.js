import React, {use, useState} from "react";

function Item({ name, category }) {
  
  const[inCart, setInCart] = useState(false);

  const itemClass = inCart ? "in-cart" : "";

  function handleCart() {
    setInCart((inCart) => !inCart);
  }
  
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

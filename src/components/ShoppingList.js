import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const[selectedCategory, setSelectedCategory] = useState("All");

  function handleChange(e) {
    const newSelectedCategory = e.target.value;
    setSelectedCategory(newSelectedCategory);

  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.filter((item) => selectedCategory === "All" ? item : item.category === selectedCategory).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

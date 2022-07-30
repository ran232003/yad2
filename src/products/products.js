import React from "react";
import { items } from "./../items";
import ProductItems from "./components/ProductItems";
import "./products.css";
const Products = (props) => {
  console.log(items);
  return (
    <div>
      Products
      <div>
        {items.map((item) => {
          return (
            <div className="items">
              <ProductItems
                name={item.name}
                price={item.price}
                key={item.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

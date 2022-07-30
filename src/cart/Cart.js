import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Headline from "../components/Headline";
import CartItems from "./CartItems";

const Cart = () => {
  const items = useSelector((state) => {
    return state.cart.items;
  });
  console.log(items);
  return (
    <div>
      {items.length < 1 ? (
        <div className="centerText">
          <Headline lable="Cart Is Empty" />
        </div>
      ) : (
        <div className="items">
          {items.map((item) => {
            return (
              <CartItems
                key={item.name}
                name={item.name}
                amount={item.amount}
                itemPrice={item.itemPrice}
                price={item.price}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;

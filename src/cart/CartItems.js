import React from "react";

const CartItems = (props) => {
  const { name, amount, itemPrice, price } = props;

  return (
    <div className="flexItem">
      <p>{name}</p>
      <p>{amount}</p>
      <p>{itemPrice}</p>

      <p>{price}</p>
    </div>
  );
};

export default CartItems;

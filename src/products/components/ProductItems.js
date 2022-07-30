import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { cartAction } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductItems = (props) => {
  const { name, price } = props;
  const dispatch = useDispatch();
  const [val, setVal] = useState(0);
  const handleChange = (e) => {
    let val = e.target.value;
    console.log(val);
    setVal(val);
  };
  const handleSubmit = (e) => {
    let obj = {
      name,
      price: price * val,
      amount: parseInt(val),
      itemPrice: price,
    };
    dispatch(cartAction.addItem(obj));
  };
  return (
    <div>
      <p>{name}</p>
      <p>{price}$</p>
      <input value={val} min="0" type="number" onChange={handleChange} />
      <br />
      <Button onClick={handleSubmit}>Add</Button>
    </div>
  );
};

export default ProductItems;

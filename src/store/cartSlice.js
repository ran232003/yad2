import { createSlice } from "@reduxjs/toolkit";
import { items } from "../items";
const CartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalItems: 0, totalPrice: 0 },
  reducers: {
    addItem(state, action) {
      console.log(action.payload);
      const updateItem = state.items.find((item) => {
        if (item.name === action.payload.name) {
          return item;
        }
      });

      if (updateItem) {
        updateItem.price += action.payload.price;
        updateItem.amount += action.payload.amount;
        state.totalPrice += updateItem.price;
      } else {
        let obj = { ...action.payload, itemPrice: action.payload.itemPrice };
        state.totalPrice += obj.itemPrice;
        state.items.push(obj);
      }
      console.log(state.items);
    },
    removeItem(state, action) {},
  },
});

export default CartSlice;

export const cartAction = CartSlice.actions;

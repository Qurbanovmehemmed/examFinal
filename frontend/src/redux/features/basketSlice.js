import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  basket: [],
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const existProducts = state.basket.find(
        (item) => item._id === action.payload._id
      );
      if (!existProducts) {
        state.basket.push({ ...action.payload, count: 1 });
      } else {
        existProducts.count += 1;
      }
    },

    plusBtn: (state, action) => {
      const existProducts = state.basket.find(
        (item) => item._id === action.payload._id
      );
      if (existProducts) {
        existProducts.count += 1;
      }
    },
    minusBtn: (state, action) => {
      const existProducts = state.basket.find(
        (item) => item._id === action.payload._id
      );
      if (existProducts.count > 1) {
        existProducts.count -= 1;
      }
    },
      deleteBasket: (state, action) => {
        state.basket = state.basket.filter(
          (item) => item._id !== action.payload._id
        );
      },
  },
});

export const { addBasket, deleteBasket, plusBtn, minusBtn } =
  basketSlice.actions;
export default basketSlice;
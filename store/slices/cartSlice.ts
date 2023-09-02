import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

export type CartState = {
  cart: Array<object>;
};

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartState(state, action) {
      state.cart = [...state.cart, action.payload];
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.cart,
      };
    },
  },
});

export const { setCartState } = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.cart;
export default cartSlice.reducer;

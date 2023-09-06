import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";
import { apiSlice } from "../api/apiSlice";

export type CartState = {
  cart: Array<object>;
};

const initialState: CartState = {
  cart: [],
};

// ----------slice
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

// ---------api face
const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

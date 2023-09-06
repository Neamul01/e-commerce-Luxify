import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";
import { apiSlice } from "../api/apiSlice";

export type CartState = {
  cart: Array<any>;
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
      const existCartItem = state.cart.find(
        (newCart) => Number(newCart.id) === Number(action.payload.id)
      );

      if (existCartItem) {
        // If the item already exists in the cart, increment its count
        existCartItem.count += 1;
      } else {
        // If the item doesn't exist, add it to the cart with a count of 1
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
    increaseCartCount(state, action) {
      const effectCart: any = state.cart.find(
        (c) => Number(c.id) === Number(action.payload.id)
      );
      if (effectCart) {
        effectCart.count += 1;
      }
    },
    decreaseCartCount(state, action) {
      const effectCart: any = state.cart.find(
        (c) => Number(c.id) === Number(action.payload.id)
      );
      if (effectCart) {
        effectCart.count -= 1;
      }
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

export const { setCartState, increaseCartCount, decreaseCartCount } =
  cartSlice.actions;

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

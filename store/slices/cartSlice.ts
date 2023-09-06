import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";
import { apiSlice } from "../api/apiSlice";

export type CartState = {
  cart: Array<any>;
  cartTotal: number;
};

const initialState: CartState = {
  cart: [],
  cartTotal: 0,
};

// Define a function to calculate cartTotal
const calculateCartTotal = (cart: any) => {
  return cart.reduce((total: number, item: any) => {
    if (item.count > 0) {
      return total + item.price * item.count;
    }
    return total;
  }, 0);
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
      // Calculate cartTotal within this reducer
      state.cartTotal = calculateCartTotal(state.cart);
    },
    increaseCartCount(state, action) {
      const effectCart: any = state.cart.find(
        (c) => Number(c.id) === Number(action.payload.id)
      );
      if (effectCart) {
        effectCart.count += 1;
      }
      // Calculate cartTotal within this reducer
      state.cartTotal = calculateCartTotal(state.cart);
    },
    decreaseCartCount(state, action) {
      const effectCart: any = state.cart.find(
        (c) => Number(c.id) === Number(action.payload.id)
      );
      if (effectCart) {
        effectCart.count -= 1;
      }
      // Calculate cartTotal within this reducer
      state.cartTotal = calculateCartTotal(state.cart);
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
export const selectCartTotal = (state: AppState) => state.cart.cartTotal;
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

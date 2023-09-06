import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://luxify-server-production.up.railway.app",
    credentials: "include",
    prepareHeaders: (headers) => {
      let tokenString = localStorage.getItem("user");

      if (tokenString !== null) {
        let token = JSON.parse(tokenString).result;
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({}),
});

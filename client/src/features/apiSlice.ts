// @ts-nocheck
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Categories } from "../models/categories.model";
import { Transaction } from "../models/transaction.model";

const baseURI = "http://localhost:8080";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    // get categories
    getCategories: builder.query<Categories>({
      // get: 'http://localhost:8080/api/categories'
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),

    // get labels
    getLabels: builder.query<Transaction[]>({
      // get: 'http://localhost:8080/api/labels'
      query: () => "/api/labels",
      providesTags: ["transaction"],
    }),

    // add new Transaction
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        // post: 'http://localhost:8080/api/transaction'
        url: "/api/transaction",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["transaction"],
    }),

    // delete record
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        // delete: 'http://localhost:8080/api/transaction'
        url: "/api/transaction",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

export default apiSlice;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Transaction } from "../model/Transaction";

export interface ExpenseStore {
  transactions: Transaction[];
}

const initialState: ExpenseStore = {
  transactions: [],
};

const slice = createSlice({
  name: "tranaction",
  initialState: initialState,
  reducers: {
    transactionAdded: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },

    // ! Not completed now
    transactionRemoved: (state, action) => {
      state.transactions.filter(
        (transaction) => transaction.id !== action.payload.id
      );
    },
  },
});

// exporting Action
export const { transactionAdded, transactionRemoved } = slice.actions;
// exporting Transaction Reducer
export default slice.reducer;

import { createReducer } from "@reduxjs/toolkit";

export const selectResponse = createReducer(
  {},
  {
    dataSelectRequest: (state) => {
      state.loading = true;
      state.selected_data = [];
    },
    dataSelectSuccess: (state, action) => {
      state.loading = false;
      state.selected_data = action.payload.selected_data;
      state.user = action.payload.user;
    },
    dataSelectFailure: (state, action) => {
      state.loading = false;
      state.selected_data = [];
      state.message = action.payload.message;
    },
  }
);

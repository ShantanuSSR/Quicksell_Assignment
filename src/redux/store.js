import { configureStore } from "@reduxjs/toolkit";
import { response } from "./ResponseSlice";
import { selectResponse } from "./SelectResponseSlice";

export const store = configureStore({
  reducer: {
    response,
    selectResponse,
  },
});

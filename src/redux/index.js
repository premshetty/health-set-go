import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import formsReducer from "./formsSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    forms: formsReducer,
  },
});

export default store;

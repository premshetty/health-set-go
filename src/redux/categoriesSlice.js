import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    editCategory: (state, action) => {
      const { id, name, description } = action.payload;
      const category = state.find((category) => category.id === id);
      if (category) {
        category.name = name;
        category.description = description;
      }
    },
  },
});

export const { addCategory, editCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;

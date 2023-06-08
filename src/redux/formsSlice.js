import { createSlice } from "@reduxjs/toolkit";

const formsSlice = createSlice({
  name: "forms",
  initialState: [],
  reducers: {
    addForm: (state, action) => {
      state.push(action.payload);
    },
    editForm: (state, action) => {
      const { id, name, email, uid, phoneNumber, description } = action.payload;
      const form = state.find((form) => form.id === id);
      if (form) {
        form.name = name;
        form.email = email;
        form.uid = uid;
        form.phoneNumber = phoneNumber;
        form.description = description;
      }
    },
    changeFormCategory: (state, action) => {
      const { id, categoryId } = action.payload;
      const form = state.find((form) => form.id === id);
      if (form) {
        form.categoryId = categoryId;
      }
    },
  },
});

export const { addForm, editForm, changeFormCategory } = formsSlice.actions;

export default formsSlice.reducer;

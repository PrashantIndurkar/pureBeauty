import { createSlice } from "@reduxjs/toolkit";

export interface modalState {
  open: boolean;
}

const initialState: modalState = {
  open: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openBasket: (state) => {
      state.open = true;
    },
    closeBasket: (state) => {
      state.open = false;
    },
  },
});

// Selectors
export const { openBasket, closeBasket } = modalSlice.actions;
export default modalSlice.reducer;

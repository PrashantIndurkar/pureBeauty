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
    setOpen: (state) => {
      state.open = !state.open;
    },
  },
});

// Selectors
export const { setOpen } = modalSlice.actions;
export default modalSlice.reducer;

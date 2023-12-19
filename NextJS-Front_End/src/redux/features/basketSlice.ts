import { RootState } from "./../app/store";
import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../hooks/useLocalStorage";

interface basketProduct {
  items: Product[];
}

const initialState: basketProduct = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basketProducts",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem._id === action.payload.id
      );
      const newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in basket`
        );
      }

      state.items = newBasket;
    },
  },
});

// Selectors
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// use SELECTOR to get the basket Items
export const basketItems = (state: RootState) => state.basketProducts.items;

export default basketSlice.reducer;

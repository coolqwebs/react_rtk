import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/sliderSlice";
import productsSlice from "../features/slices/productsSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsSlice,
  },
});

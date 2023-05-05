import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/sliderSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/data";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filteredData = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filteredData;

        sessionStorage.setItem("filteredData", JSON.stringify(filteredData));
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;

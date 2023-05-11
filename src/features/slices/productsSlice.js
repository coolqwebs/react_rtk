import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/data";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct: JSON.parse(sessionStorage.getItem("oneProduct")) || [],
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
    setSingleProduct(state, action) {
      try {
        const oneProduct = state.filteredProducts.filter(
          (data) => data.id === action.payload
        );

        state.singleProduct = oneProduct;

        sessionStorage.setItem("oneProduct", JSON.stringify(oneProduct));
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filterProducts, setSingleProduct } = productsSlice.actions;
export default productsSlice.reducer;

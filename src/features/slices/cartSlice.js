import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCard(state, action) {
      const product = action.payload;
      try {
        const isProductInCart = state.cart.find(
          (cartItem) =>
            cartItem.id === product.id &&
            cartItem.size === product.size &&
            cartItem.color === product.color
        );
        if (isProductInCart) {
          isProductInCart.amount++;
          isProductInCart.totalPrice += product.price;
          state.totalAmount++;
          state.totalPrice += product.price;
        } else {
          state.cart.push({
            id: product.id,
            price: product.price,
            img: product.img,
            text: product.text,
            size: product.size,
            amount: 1,
            totalPrice: product.price,
            name: product.name,
            color: product.color,
          });
          state.totalAmount++;
          state.totalPrice += product.price;
        }
      } catch (error) {
        return error;
      }
    },
    removeFromCart(state, action) {
      const product = action.payload;
      try {
        const isProductInCart = state.cart.find(
          (cartItem) =>
            cartItem.id === product.id &&
            cartItem?.size === product?.size &&
            cartItem?.color === product?.color
        );
        if (isProductInCart.amount === 1) {
          state.cart = state.cart.filter(
            (cartItem) =>
              cartItem.id !== product.id ||
              cartItem?.size !== product?.size ||
              cartItem?.color !== product?.color
          );
          state.totalAmount--;
          state.totalPrice -= product.price;
        } else {
          isProductInCart.amount--;
          isProductInCart.totalPrice -= product.price;
          state.totalAmount--;
          state.totalPrice -= product.price;
        }
      } catch (error) {
        return error;
      }

      alert("Item removed");
    },
  },
});

export const { addToCard, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

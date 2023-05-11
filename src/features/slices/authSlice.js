import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      email: "",
      pwd: "",
      image: "",
      authUser: false,
    },
  },
  reducers: {
    login(state, action) {
      const userData = action.payload;
      // need to be at least 1 number, 1 special symbol and 1 char
      const pwdValidation =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
          userData.pwd
        );
      state.user = userData;
      if (!pwdValidation) {
        state.user.authUser = false;
      } else {
        state.user.authUser = true;
        sessionStorage.setItem("authUser", JSON.stringify(userData));
      }
    },
    logout(state, action) {
      state.user = {
        email: "",
        pwd: "",
        image: "",
        authUser: false,
      };
      sessionStorage.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

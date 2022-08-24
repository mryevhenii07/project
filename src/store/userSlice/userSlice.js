import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  yourName: null,
  email: null,
  phone: null,
  checkbox: null,
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.yourName = action.payload.yourName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.checkbox = action.payload.checkbox;
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    removeUser(state) {
      state.yourName = null;
      state.email = null;
      state.phone = null;
      state.checkbox = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

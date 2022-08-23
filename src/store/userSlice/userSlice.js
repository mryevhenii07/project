import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  yourName: null,
  email: null,
  phone: null,
  checkbox: null,
  token: null,
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
    },
    removeUser(state) {
      state.yourName = null;
      state.email = null;
      state.phone = null;
      state.checkbox = null;
      state.token = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

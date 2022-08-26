import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  yourName: null,
  email: null,
  phone: null,
  photo: null,
  position_id: null,

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
      state.position_id = action.payload.position_id;
      state.photo = action.payload.photo;

      state.token = action.payload.token;
    },
    removeUser(state) {
      state.yourName = null;
      state.email = null;
      state.phone = null;
      state.photo = null;
      state.position_id = null;

      state.token = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      return state.filter((user) => {
        return user !== action.payload;
      });
    },
    deleteUsers(state, action) {
      return [];
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;

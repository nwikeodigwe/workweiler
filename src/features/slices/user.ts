import { createSlice } from "@reduxjs/toolkit";

export type userStateType = {
  id: string;
  accessToken: string;
  idToken: string;
  email: string;
  firstname: string;
  lastname: string;
};

const initialState: userStateType = {
  id: "",
  accessToken: "",
  idToken: "",
  email: "",
  firstname: "",
  lastname: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set_user: (state, action) => {
      Object.assign(state, action.payload);
    },
    clear_user: (state) => {
      Object.assign(state, initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const { set_user, clear_user } = userSlice.actions;

export default userSlice.reducer;

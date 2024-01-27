import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  user: string | null;
};

const loggedInUser = () => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem("user_info");
    return item ? JSON.parse(item) : null;
  } else {
    return null;
  }
};

const initialState: initialState = {
  user: loggedInUser(),
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("e_commerce_user_info", JSON.stringify(action.payload))
    },
    logOut: (state) => {
      state.user = null;
      localStorage.removeItem("e_commerce_user_info")
    },
  },
});

export const { setUser, logOut } = userSlice.actions;
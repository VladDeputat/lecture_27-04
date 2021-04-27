import { createReducer } from "@reduxjs/toolkit";
import { register, login, logout } from "./AuthActions";

const initialState = {
  email: "",
  idToken: "",
  refreshToken: "",
};

const AuthReducer = createReducer(
  { ...initialState },
  {
    [register]: (_, { payload }) => payload,
    [login]: (_, { payload }) => payload,
    [logout]: () => initialState,
  }
);

export { AuthReducer };

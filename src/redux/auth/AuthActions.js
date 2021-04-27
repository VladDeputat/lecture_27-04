import { createAction } from "@reduxjs/toolkit";

const register = createAction("auth/register");
const login = createAction("auth/login");
const logout = createAction("auth/logout");

export { register, login, logout };

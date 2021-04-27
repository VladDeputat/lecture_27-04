import axios from "axios";
import { login, register } from "./AuthActions";

const API_KEY = "AIzaSyCRy8QR0CIc-wdZNrg3jUnv-kJyLhKt93M";

export const registerOperation = (data) => (dispatch) => {
  axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      { ...data, returnSecureToken: true }
    )
    .then((res) => dispatch(register(res.data)));
};

export const loginOperation = (data) => (dispatch) => {
  axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      { ...data, returnSecureToken: true }
    )
    .then((res) => dispatch(login(res.data)));
};

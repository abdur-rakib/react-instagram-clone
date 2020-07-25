import { auth } from "../../firebase/utils";
import {
  CREATE_USER,
  LOGOUT_USER,
  SET_ERROR,
  CLEAR_ERROR,
  SET_LOADING,
  CLEAR_LOADING,
} from "../types";

export const signUpWithEmailPassword = (newUserData) => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
  dispatch({ type: SET_LOADING });
  auth
    .createUserWithEmailAndPassword(newUserData.email, newUserData.password)
    .then((res) => {
      return res.user
        .updateProfile({
          displayName: newUserData.username,
        })
        .then(() => {
          dispatch({
            type: CREATE_USER,
            payload: {
              email: res.user.email,
              displayName: res.user.displayName,
            },
          });
          dispatch({ type: CLEAR_LOADING });
        });
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR, payload: err.message });
      dispatch({ type: CLEAR_LOADING });
    });
};

// login
export const signinWithEmail = (userData) => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
  dispatch({ type: SET_LOADING });
  auth
    .signInWithEmailAndPassword(userData.email, userData.password)
    .then((res) => {
      dispatch({
        type: CREATE_USER,
        payload: { email: res.user.email, displayName: res.user.displayName },
      });
      dispatch({ type: CLEAR_LOADING });
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR, payload: err.message });
      dispatch({ type: CLEAR_LOADING });
    });
};

// logout
export const logout = () => (dispatch) => {
  auth
    .signOut()
    .then(() => {
      dispatch({ type: LOGOUT_USER });
    })
    .catch((err) => console.log(err));
};

export const clearError = () => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};

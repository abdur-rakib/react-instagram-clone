import { auth } from "../../firebase/utils";
import { CREATE_USER, LOGOUT_USER, SET_ERROR, CLEAR_ERROR } from "../types";

export const signUpWithEmailPassword = (newUserData) => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
  auth
    .createUserWithEmailAndPassword(newUserData.email, newUserData.password)
    .then((res) => {
      return res.user
        .updateProfile({
          displayName: newUserData.username,
        })
        .then(() => {
          console.log(res.user);
          dispatch({
            type: CREATE_USER,
            payload: {
              email: res.user.email,
              displayName: res.user.displayName,
            },
          });
        });
    })
    .catch((err) => dispatch({ type: SET_ERROR, payload: err.message }));
};

// login
export const signinWithEmail = (userData) => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
  auth
    .signInWithEmailAndPassword(userData.email, userData.password)
    .then((res) => {
      dispatch({
        type: CREATE_USER,
        payload: { email: res.user.email, displayName: res.user.displayName },
      });
    })
    .catch((err) => dispatch({ type: SET_ERROR, payload: err.message }));
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

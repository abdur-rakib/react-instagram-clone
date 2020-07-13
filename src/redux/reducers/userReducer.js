import { CREATE_USER, LOGOUT_USER, SET_ERROR, CLEAR_ERROR } from "../types";

const initState = {
  authenticated: false,
  email: "",
  displayName: "",
  error: "",
};

export default function (state = initState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        authenticated: true,
        ...action.payload,
      };
    case LOGOUT_USER:
      return {
        ...initState,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    default:
      return {
        ...state,
      };
  }
}

import { SET_LOADING, CLEAR_LOADING } from "../types";

const initState = {
  loading: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

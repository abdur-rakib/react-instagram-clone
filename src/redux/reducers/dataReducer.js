import { SET_POSTS, SET_COMMENTS } from "../types";

const initState = {
  posts: null,
  post: null,
  comments: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_COMMENTS:
      // console.log(action.payload);
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
